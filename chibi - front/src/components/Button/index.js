import './button.scss';
import bread from '../../assets/icons/bread2.png';
import { useState } from 'react';

const Button = ({ children, handleClick, type, disabled }) => {
    const [animation, setAnimation] = useState('');
    return (
        <button 
            type={type} 
            className='button' 
            onClick={handleClick}
            onMouseEnter={() => {
                setAnimation('animation');
            }}
            onMouseLeave={() => {
                setAnimation('');
            }}
            disabled={disabled}
        >
            {children}
            <img className={`button__animation ${animation}`} src={bread} />
        </button>
    );
};

export default Button;