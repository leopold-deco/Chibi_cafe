import PropTypes from 'prop-types';

import './liquidcats.scss';

const LiquidCats = ({ category_name, category_picture, id, findProducts }) => {



    const mystyle = {
        background: `url(${category_picture})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: '45%',
        backgroundSize: "cover"
      };


 
  

    
 return   (
    <div onClick={(e) => findProducts(e.target.id, e.target.className)} id={`${id}`} style={mystyle} 
     className={`liquid__categories ${category_name}`}>
        <h2 className={`${id}`} style={{marginTop: '2rem'}} >{category_name}</h2>
        
    </div>
);

};



LiquidCats.propTypes = {
    findProducts: PropTypes.func.isRequired,
    category_name : PropTypes.string.isRequired,
    category_picture : PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,


}

export default LiquidCats;