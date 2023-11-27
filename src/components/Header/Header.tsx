import { FunctionComponent } from "react";
import "./Header.scss"

interface HeaderProps {
    
}
 
const Header: FunctionComponent<HeaderProps> = () => {
    return ( 
        <div>
            <div className="header-container">
                <p>This is the header</p>
            </div>
        </div>
     );
}
 
export default Header;