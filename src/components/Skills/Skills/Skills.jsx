import reactIcon from "../../../assets/icons/react-icon.svg";
import androidIcon from "../../../assets/icons/android-icon.svg";
import figmaIcon from "../../../assets/icons/figma-icon.svg";
import awsIcon from "../../../assets/icons/aws-icon.svg";
import htmlIcon from "../../../assets/icons/html-icon.svg";
import javaIcon from "../../../assets/icons/java-icon.svg";
import javascriptIcon from "../../../assets/icons/javascript-icon.svg";
import kotlinIcon from "../../../assets/icons/kotlin-icon.svg";
import linuxIcon from "../../../assets/icons/linux-icon.svg";
import sqlIcon from "../../../assets/icons/sql-icon.svg";
import pythonIcon from "../../../assets/icons/python-icon.svg";

import SkillCard  from "../SkillCard/SkillCard";
import "./Skills.css";

const skillsData= [
    {skillName:"Figma", skillIcon:figmaIcon},
    {skillName:"HTML5", skillIcon:htmlIcon},
    {skillName:"JavaScript", skillIcon:javascriptIcon},
    {skillName:"React", skillIcon:reactIcon},
    {skillName:"Java", skillIcon:javaIcon},
    {skillName:"Kotlin", skillIcon:kotlinIcon},
    {skillName:"Android", skillIcon:androidIcon},
    {skillName:"Python", skillIcon:pythonIcon},
    {skillName:"SQL", skillIcon:sqlIcon},
    {skillName:"Linux", skillIcon:linuxIcon},
    {skillName:"AWS", skillIcon:awsIcon}
];
const Skills = () => {
    return(
        <section className="skills-section" id="skills">

            <p className="skill-title">My Skills</p>

            <div className="skill-container" >
            
            {skillsData.map((skill) => (
                
                <SkillCard 
                key={skill.skillName}
                skillName={skill.skillName}
                skillIcon={skill.skillIcon}
                />
            ))}
            
        </div>

        </section>
        
    );
};

export default Skills;