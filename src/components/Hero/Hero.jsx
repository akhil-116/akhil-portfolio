import "./Hero.css";
import Button from '../Button/Button';

const Hero = () => {
    return(
        <section className="hero" id="home">
            <div className="hero-content">
                <h1 className="hero-title">Creating User-centric Digital Experiences that solve real problems</h1>
                <p className="hero-description">
                    Craft professional web applications with clean UI and modern technologies.
                    Focused on delivering user-centric solutions and enhancing technical expertise. 
                </p>
                <div className="hero-buttons">
                    <Button  text="View My Work" type="primary"/>
                    <Button  text="Learn More" type="secondary"/>
                </div>
                
            </div>
        </section>
    );
};

export default Hero;