import { FunctionComponent } from "react";
import "./Navbar.scss"
import { Link } from "react-router-dom";

interface NavbarProps {
    
}
 
const Navbar: FunctionComponent<NavbarProps> = () => {
    return ( 
        <div className="nav-bar">
            <Link className="nav-item" to='/work-with-me'>
                Work with me
            </Link>
            <Link className="nav-item" to='/'>
                Home
            </Link>
            <Link className="nav-item" to='/my-journey'>
                My Journey
            </Link>
        </div>
     );
}
 
export default Navbar;