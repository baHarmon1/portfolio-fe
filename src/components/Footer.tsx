import { FunctionComponent } from "react";
import "../scss/styles.scss"
import github from "../assets/images/github-logo.png"
import linkedin from "../assets/images/LinkedIn.png"
import resume from "../assets/images/Resume.png"

interface FooterProps {
    
}
 
const Footer: FunctionComponent<FooterProps> = () => {
    return ( 
        <div className="footer-container">
            <a className="icon" href="https://github.com/baHarmon1" target="_blank">
                <img src={github} alt="github logo" />
            </a>
            <a className="icon" href="https://www.linkedin.com/in/brycen-harmon?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B62YJfCs1S7CjpBGNWD0x4A%3D%3D" target="_blank">
                <img src={linkedin} alt="Linked In logo" />
            </a>
            <a className="icon" href="https://docs.google.com/document/d/1W-HFMXpWcwKQDEqzBt4JLEyhR3NAWx-IFsOxnwYy34c/edit?usp=sharing"target="_blank" >
                <img src={resume} alt="resume" />
            </a>
        </div>
     );
}
 
export default Footer;