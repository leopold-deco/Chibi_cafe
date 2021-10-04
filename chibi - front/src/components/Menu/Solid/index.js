import SolidCats from '../SolidCats';
import PropTypes from 'prop-types'
import './solid.scss';

const Solid = ({ solids, findProducts }) => { 


return (

    <div className='solid'>
    { solids.map((solid) => (
        <SolidCats  key={solid.id}  {...solid} findProducts={findProducts}/>
    ))}
        
    </div>
);
};

Solid.propTypes = {
    solids: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
     
    findProducts: PropTypes.func.isRequired,

}

export default Solid;