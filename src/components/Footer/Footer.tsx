import { FunctionComponent } from "react";
import "./Footer.scss"
import github from "../../assets/images/github-logo.png"
import linkedin from "../../assets/images/LinkedIn.png"
import resume from "../../assets/images/Resume.png"

interface FooterProps {
    
}
 
const Footer: FunctionComponent<FooterProps> = () => {
    return ( 
        <div className="footer-container">
            <div className="icon">
                <img src={github} alt="github logo" />
            </div>
            <div className="icon">
                <img src={linkedin} alt="github logo" />
            </div>
            <div className="icon">
                <img src={resume} alt="github logo" />
                {/* Open a new page and display the resume */}
            </div>
        </div>
     );
}
 
export default Footer;