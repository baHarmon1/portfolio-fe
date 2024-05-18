import { FunctionComponent } from "react";
import "./Header.scss"
import {Button} from "@mui/material"

interface HeaderProps {
    
}
 
const Header: FunctionComponent<HeaderProps> = () => {
    return ( 
        <div>
            <div className="header-container">
                <p>This is the header</p>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </div>
        </div>
     );
}
 
export default Header;