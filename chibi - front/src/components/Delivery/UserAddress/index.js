import './user-address.scss';
import { useSelector } from 'react-redux';
import FormInputDisabled from './FormInputDisabled';
import useModal from "../../../hooks/useModal";

const UserAddress = () => {
    const { user } = useSelector(state => state.auth);
    const orders = useSelector(state => state.auth.orders);
    const { isShowing, toggle } = useModal();
    const state = useSelector(state => state)
    console.log(state)
    const { deliveryAddress } = useSelector(state => state.delivery)


    return (
        <div>
            <FormInputDisabled data={deliveryAddress ? deliveryAddress : user} 
                button={false}
            />
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
                        {orders.map((order) => (
                            <FormInputDisabled key={order.id} data={order} button={true}/>
                        ))}
                        </div>
                        </div>
                    </div>
                    </div>
                }



        </div>
    );
};

export default UserAddress;