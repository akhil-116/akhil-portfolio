import "./SkillCard.css"
const SkillCard = ({skillName, skillIcon}) => {
    return(
        <div className="skill-card">
            <img src={skillIcon} alt={skillName} className="skill-logo"/>
            <p className="skill-name">{skillName}</p>
        </div>
    );
};

export default SkillCard;