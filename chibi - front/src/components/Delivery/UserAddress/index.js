import './user-address.scss';
import { useSelector } from 'react-redux';
import Input from '../../Input';
import FormInputDisabled from './FormInputDisabled';
import useModal from "../../../hooks/useModal";

const UserAddress = () => {
    const user = useSelector(state => state.auth.user);
    const orders = useSelector(state => state.auth.orders);
    const { isShowing, toggle } = useModal();

    return (
        <div>
            <FormInputDisabled data={user} />
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
                            <FormInputDisabled data={order}/>
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