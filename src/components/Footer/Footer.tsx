import { FunctionComponent } from "react";
import "./Footer.scss"

interface FooterProps {
    
}
 
const Footer: FunctionComponent<FooterProps> = () => {
    return ( 
        <div className="footer-container">
            <div className="icon">
                GitHub
            </div>
            <div className="icon">
                LinkedIn
            </div>
            <div className="icon">
                Resume
                {/* Open a new page and display the resume */}
            </div>
        </div>
     );
}
 
export default Footer;