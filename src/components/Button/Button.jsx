import './Button.css';

const Button = ({href, type="primary",text}) => {
    return(
        <>
        <a href={href} className={`btn ${type}-btn`}>
            {text}
        </a>
        </>
    );
    
};

export default Button;