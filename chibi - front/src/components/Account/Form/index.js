import './form.scss';

const Form = ({ children, handleSubmit }) => {

    const handleLoginSignup = (event) => {
        event.preventDefault();
        handleSubmit();
    }

    return (
        <form className='form' onSubmit={handleLoginSignup}>
            {children}
        </form>
    )
};

export default Form;