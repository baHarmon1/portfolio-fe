import { FunctionComponent } from "react";
import "./Skills.scss"

interface SkillsProps {
    
}
 
const Skills: FunctionComponent<SkillsProps> = () => {
    return ( 
        <div>
            <div className="skills-container">
                <div className="row">
                    <p>Skill</p>
                    <p>Skill</p>
                    <p>Skill</p>
                </div>
                <div className="row">
                    <p>Skill</p>
                    <p>Skill</p>
                    <p>Skill</p>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;