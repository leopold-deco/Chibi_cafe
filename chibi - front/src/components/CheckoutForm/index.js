import './checkout-form.scss';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Form from '../Account/Form';
import cupcake from '../../assets/icons/cupcake.png';
import cupcakeClose from '../../assets/icons/cupcake-close.png';
import bread from '../../assets/icons/bread.png';

export default function CheckoutForm() {
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const [ success, setSuccess ] = useState(false);
  const [ message, setMessage ] = useState('');
  const [ image, setImage ] = useState(cupcake);
  const cart = useSelector(state => state.shop.cart);
  const state = useSelector(state => state);

  const handleSubmit = async () => {

    if (!stripe || !elements) {
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error.message);
      setMessage(error.message)
      console.log(error)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post("https://chibi-api.herokuapp.com/createCheckoutSession", { 
          cart,
          id,
        });

        if(response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
          try {
            const responseOrder = await axios.post("https://chibi-api.herokuapp.com/order", { 
              state
            });
  
            if(responseOrder.data.id) {
              console.log("success", responseOrder);
              localStorage.setItem("lastOrder", JSON.stringify(responseOrder.data));
              history.push('/confirmation')
            }

          } catch (error) {
            console.log('error', error)
          }
        }
      } catch (error) {
        console.log('error', error)
      }
    }
  };

  const handleFocus = () => {
    console.log("change")
    setImage(cupcakeClose);
  }

  return (
    <div className="checkout">
    {!success ?
      <Form handleSubmit={handleSubmit}>
        <div classname="checkout__message" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: "6rem"}}>
        {message? 
          <>
            <p className="text-animation">
              {message}
            </p> 
            <img className="image-animation" src={bread} /> </>:
          <img style={{width: "6rem"}} src={image} />
        }
        </div>        

        <fieldset className="checkout__form-group">
          <div className="checkout__form-row">
            <CardElement 
              onChange={handleFocus}
              options={{
                iconStyle: "solid",
                style: {
                    base: {
                        iconColor: "#c4f0ff",
                        color: "#fff",
                        fontWeight: 500,
                        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                        fontSize: "16px",
                        fontSmoothing: "antialiased",
                        ":-webkit-autofill": { color: "#fce883" },
                        "::placeholder": { color: "#87bbfd" }
                    },
                    invalid: {
                        iconColor: "#ffc7ee",
                        color: "#ffc7ee"
                    }
                }
              }} 
            />
          </div>
        </fieldset>
        
        <button className="checkout__button" type="submit" disabled={!stripe}>
          Payer
        </button>
      </Form> :
      <div>
        <h2>Paiement validé!</h2>
      </div>
    }

    </div>
  );
};