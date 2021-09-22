import './form.scss';

const Form = ({ children, handleLogin }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogin();
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            {children}
        </form>
    )
};

export default Form;