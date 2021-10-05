import './button.scss';

const Button = ({ children, handleClick, type }) => (
    <button type={type} className='button' onClick={handleClick}>
        {children}
    </button>
);

export default Button;