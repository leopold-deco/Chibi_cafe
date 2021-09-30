import './checkout-form.scss';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from 'react';
import axios from 'axios';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [ success, setSuccess ] = useState(false);
  const cart = JSON.parse(localStorage.getItem("cart"));

  const handleSubmit = async (event) => {
    event.preventDefault();

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
        }
      } catch (error) {
        console.log('error', error)
      }
    }
  };

  return (
    <div className="checkout">
    {!success ?
      <form onSubmit={handleSubmit}>
        <fieldset className="checkout__form-group">
          <div className="checkout__form-row">
            <CardElement />
          </div>
        </fieldset>
        
        <button className="checkout__button" type="submit" disabled={!stripe}>
          Payer
        </button>
      </form> :
      <div>
        <h2>You just bought a ...</h2>
      </div>
    }

    </div>
  );
};