
import LiquidCats from '../LiquidCats';
import PropTypes from 'prop-types'
import './liquid.scss';

const Liquid = ({ liquids, findProducts }) => { 


return (

    <div className='liquid'>
    { liquids.map((liquid) => (
        <LiquidCats  key={liquid.id}  {...liquid} findProducts={findProducts}/>
    ))}
        
    </div>
);
};

Liquid.propTypes = {
    liquids: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
     
    findProducts: PropTypes.func.isRequired,

}

export default Liquid;