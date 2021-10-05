import { useDispatch, useSelector } from 'react-redux';
import NewAddress from '../Delivery/NewAddress';
import './addresses.scss';
import useModal from "../../hooks/useModal";
import { useState } from 'react';
import { newAddress } from '../../actions/auth';

function Addresses() {
    const dispatch = useDispatch();
    const { deliveryAddress } = useSelector((state) => state.delivery);
    const { isShowing, toggle } = useModal();
    const [newAddress, setNewAddress] = useState({
        first_name: '', 
        last_name: '', 
        phone_number: '', 
        street_number: '', 
        name_of_the_road: '', 
        postal_code: '', 
        city: '', 
    })

    const handleChangeNewAddress = (value, name) => {
        setNewAddress({
            ...newAddress,
            [ name ] : value
        });
    }

    const handleClick = () => {
        dispatch(newAddress(newAddress))
    };

    console.log(newAddress)
    return (
      <div>
            <button type="button" className="modal-toggle" onClick={toggle}>
            Ajouter une adresse
            </button>
            {isShowing && 
                <div className="modal-overlay">
                <div className="modal-wrapper">
                    <div className="modal">
                    <div className="modal-header">
                        <h4>Nouvelle Adresse</h4>
                        <button
                        type="button"
                        className="modal-close-button"
                        onClick={toggle}
                        >
                        <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-flex">
                    <NewAddress newAddress={newAddress} handleChangeNewAddress={handleChangeNewAddress}
                    button={true} handleClick={handleClick}/>
                    </div>
                    </div>
                </div>
                </div>
            }
          {deliveryAddress && deliveryAddress.map(address => (
              <NewAddress newAddress={address} />
          ))}
      </div>
    );
}
  
export default Addresses;