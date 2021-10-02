import './user-address.scss';
import { useSelector } from 'react-redux';
import FormInputDisabled from './FormInputDisabled';
import useModal from "../../../hooks/useModal";
import { useState } from 'react';

const UserAddress = () => {
    const { user } = useSelector(state => state.auth);
    const userAddresses = useSelector(state => state.auth.userAddresses);
    const { isShowing, toggle } = useModal();
    const state = useSelector(state => state)

    const { deliveryAddress } = useSelector(state => state.delivery)

    const [data, setData] = useState();
    console.log("data",data)
    return (
        <div>
            <FormInputDisabled data={deliveryAddress ? deliveryAddress : user} 
                button={false}
            />
            {userAddresses &&
                <>
                    <button type="button" className="modal-toggle" onClick={toggle}>
                        Choisir une autre adresse de livraison
                    </button>
                    {isShowing && 
                        <div className="modal-overlay">
                        <div className="modal-wrapper">
                            <div className="modal">
                            <div className="modal-header">
                                <h4>Choisir une autre adresse de livraison</h4>
                                <button
                                type="button"
                                className="modal-close-button"
                                onClick={toggle}
                                >
                                <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-flex">
                            {userAddresses.map((userAddress) => (
                                <FormInputDisabled key={userAddress.id} data={userAddress} button={true} 
                                    setData={setData}/>
                            ))}
                            </div>
                            </div>
                        </div>
                        </div>
                    }
                </>
            }
        </div>
    );
};

export default UserAddress;