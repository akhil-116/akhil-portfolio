import './Button.css';

const Button = ({href, type="primary",text, onClick }) => {
    return(
        <>
        <a href={href} className={`btn ${type}-btn`} onClick={onClick}>
            {text} <span className='btn-arrow'>&rarr;</span>
        </a>
        </>
    );
    
};

export default Button;