import './button.scss';

const Button = ({ children, handleClick }) => (
    <button className='button' onClick={handleClick}>
        {children}
    </button>
);

export default Button;