import './input.scss';

const Input = ({ type, id, name, placeholder }) => (
    <input type={type} id={id} name={name} placeholder={placeholder} required />
);

export default Input;