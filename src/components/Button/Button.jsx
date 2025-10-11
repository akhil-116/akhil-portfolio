import './Button.css';

const Button = ({href, type="primary",text}) => {
    return(
        <>
        <a href={href} className={`btn ${type}-btn`}>
            {text} <span className='btn-arrow'>&rarr;</span>
        </a>
        </>
    );
    
};

export default Button;