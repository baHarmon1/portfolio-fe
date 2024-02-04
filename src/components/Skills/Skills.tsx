import { FunctionComponent } from "react";
import "./Skills.scss"
import css  from "../../assets/images/CSS.png"
import html  from "../../assets/images/HTML.png"
import js  from "../../assets/images/JS.png"
import react  from "../../assets/images/React (2).png"
import vue  from "../../assets/images/Vue.png"
import node  from "../../assets/images/Node.png"

interface SkillsProps {
    
}
 
const Skills: FunctionComponent<SkillsProps> = () => {
    return ( 
        <div>
            <div className="skills-container">
                <div className="row">
                    <div className="image-container">
                    <img src={css} alt="CSS" />
                    </div>
                    <div className="image-container">
                    <img src={html} alt="html" className="image-larger" />
                    </div>
                    <div className="image-container">
                    <img src={js} alt="js" className="image-larger" />
                    </div>
                </div>
                <div className="row">
                    <div className="image-container">
                    <img src={react} alt="js" className="image-larger" />
                    </div>
                    <div className="image-container">
                    <img src={vue} alt="js" className="image-larger image-vue" />
                    </div>
                    <div className="image-container">
                    <img src={node} alt="js" className="image-larger" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;