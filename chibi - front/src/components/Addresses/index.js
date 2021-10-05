import { useSelector } from 'react-redux';
import NewAddress from '../Delivery/NewAddress';
import './addresses.scss';

function Addresses() {
    const { deliveryAddress } = useSelector((state) => state.delivery);
    console.log(deliveryAddress)
    return (
      <div>
          {deliveryAddress && deliveryAddress.map(address => (
              <NewAddress newAddress={address} />
          ))}
      </div>
    );
}
  
export default Addresses;