import "./Projects.css";
import projectImage from "../../assets/projectImage.jpg"
import Button from "../Button/Button";

const Projects = () => {
    return(

        <>

        <p className="title" id="projects">Projects</p>
        <section className="projects-section" >

            <div className="left-content">
                <p className="project-title">OneStory (UX Case Study)</p>
                <p className="project-description">Quick learner with strong problem-solving skills, focused on delivering user-centric solutions
                     and enhancing technical expertise. I enjoy learning new technologies and turning ideas into real projects.
                     Quick learner with strong problem-solving skills, focused on delivering user-centric solutions and enhancing technical expertise. 
                     I enjoy learning new technologies and turning ideas into real projects.
                </p>
                <Button text="Know More"/>
            </div>

            <div className="project-image">
                <img src={projectImage} width={600} height={580}></img>
            </div>

        </section>

        </>

    );
}

export default Projects;