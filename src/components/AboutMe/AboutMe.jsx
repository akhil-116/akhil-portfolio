import "./AboutMe.css"
import Myphoto from "../../assets/about-me.jpg"
import Button from "../Button/Button";

const AboutMe = () => {
    return(
        <section className="aboutme-section" id="about">

            <div className="aboutme-left">
    
                    <img src={Myphoto} width={400} />
                
            </div>
    
                <div className="aboutme-right">
                    <p className="aboutme-title">About Me</p>
                    <p className="aboutme-description">
                        Hi! I'm Akhil Dasari, a Packaged App Development Associate with hands-on experience in UX design using Figma, wireframing, prototyping, 
and UX research. Upskilled in Kotlin, Core Java, Python, Git, and GitHub. Quick learner with strong problem-solving 
skills, focused on delivering user-centric solutions and enhancing technical expertise. I enjoy learning new technologies and turning ideas into real projects.Quick learner with strong problem-solving 
skills, focused on delivering user-centric solutions and enhancing technical expertise. I enjoy learning new technologies and turning ideas into real projects.
                
                    </p>
                    <Button type="primary" text="More About Me"/>
                </div>

            

        </section>
    );
}

export default AboutMe;