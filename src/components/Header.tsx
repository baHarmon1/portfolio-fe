import { FunctionComponent } from "react";
import "../scss/styles.scss"
import selfie from "../assets/images/selfie.jpeg"

interface HeaderProps {
    
}
 
const Header: FunctionComponent<HeaderProps> = () => {
    return ( 
        <div>
            <div className="header-container">
                <img src={selfie} alt="image of me" className="selfie-avatar" />
                <h1 className="header-text">I'm a passionate software developer with 5 years of experience in designing, developing, and deploying robust applications. My expertise lies in font end frameworks and languages such as Vue and React in Javascript. I thrive on solving complex problems with innovative solutions. I have a proven track record of delivering high-quality software on time and within budget, and I'm adept at collaborating with cross-functional teams to drive project success. My commitment to continuous learning and improvement ensures that I stay ahead of industry trends and can leverage the latest technologies to benefit my projects.</h1>
            </div>
        </div>
     );
}
 
export default Header;