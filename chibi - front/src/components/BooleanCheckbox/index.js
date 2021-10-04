import './boolean-checkbox.scss';
import UserAddress from '../Delivery/UserAddress';
import NewAddress from '../Delivery/NewAddress';

const Delivery = ({ 
    label, id, handleChange, isNewAddress, newAddress, handleChangeNewAddress, userAddress, setUserAddress
}) => {
    const stringToBoolean = (value) => {
        if (value && typeof value === "string") {
             if (value.toLowerCase() === "true") return true;
             if (value.toLowerCase() === "false") return false;
        }
        return value;
    }

    const onRadioChange = (event) => {
        handleChange(stringToBoolean(event.target.value));
    }

    return (
        <>
            {[
                { value: false, label: label[0], id: id[0] },
                { value: true, label: label[1], id: id[1] }
            ].map((option) => (
                <div key={option.id} className="delivery__elements">
                    <input type="radio" name="deliveryAddress" id={option.id}
                        value={option.value}
                        onChange={onRadioChange}
                        checked={isNewAddress === option.value}
                        />
                    <label htmlFor={option.id}>{option.label}</label>
                    {option.id === "userAddress" &&  
                        <UserAddress userAddress={userAddress} setUserAddress={setUserAddress}
                    />}
                    {option.id === "newAddress" && 
                        <NewAddress newAddress={newAddress} handleChangeNewAddress={handleChangeNewAddress}
                    />}
                </div>
            ))}
        </>
    );
};

export default Delivery;