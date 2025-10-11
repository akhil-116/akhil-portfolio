import "./SkillCard.css"
const SkillCard = ({skillName, skillIcon}) => {
    return(
        <div className="skill-card">
            <img src={skillIcon} alt={skillName} className="skill-logo"/>
            <h4>{skillName}</h4>
        </div>
    );
};

export default SkillCard;