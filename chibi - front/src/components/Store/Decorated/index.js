import sables from '../../../datas/datas'
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../../actions';

function Decorated() {
  const sablesMessage = sables[1]

  const dispatch = useDispatch()

  const onCart = () => {
    dispatch(addProductToCart(sablesMessage))
  }

  return (
    <div >
        <h3>{sablesMessage.nom}</h3>
        <p>{sablesMessage.description}</p>
        <button
        onClick={onCart} 
        type="button"> ajouter au panier</button>
    </div>
  );
  }
  
export default Decorated;