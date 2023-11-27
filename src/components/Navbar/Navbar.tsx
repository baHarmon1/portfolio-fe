import { FunctionComponent } from "react";
import "./Navbar.scss"
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { Link } from "react-router-dom";

interface NavbarProps {
    
}
 
const Navbar: FunctionComponent<NavbarProps> = () => {
    return ( 
        <div className="nav-bar">
            <Link className='logo' to='/'>
                <img src={LogoS} alt="logo" />
                <img src={LogoSubtitle} alt="logosub" />
            </Link>
        </div>
     );
}
 
export default Navbar;