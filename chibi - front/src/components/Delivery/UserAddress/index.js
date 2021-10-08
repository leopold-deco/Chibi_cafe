import './user-address.scss';
import { useSelector } from 'react-redux';
import FormInputDisabled from './FormInputDisabled';
import useModal from "../../../hooks/useModal";

const UserAddress = ({ userAddress, setUserAddress}) => {
    const { user } = useSelector(state => state.auth);
    const userAddressesStore = useSelector(state => state.auth.userAddresses);
    const { isShowing, toggle } = useModal();

    return (
        <div>
            <FormInputDisabled data={userAddress ? userAddress : user} 
                button={false}
            />
            {userAddressesStore &&
                <>
                    <button style={{marginTop: "1rem", marginBottom: "1rem"}} type="button" className="modal-toggle" onClick={toggle}>
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
                            {userAddressesStore.map((userAddressStore) => (
                                <FormInputDisabled key={userAddressStore.id} data={userAddressStore} button={true} 
                                handleClick={setUserAddress} />
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