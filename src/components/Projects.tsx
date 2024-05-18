import { FunctionComponent } from "react";
import "../scss/styles.scss"

interface ProjectsProps {
    
}
 
const Projects: FunctionComponent<ProjectsProps> = () => {
    return ( 
        <div className="projects-container">
            <div className="pseudo-mobile-phone">
                <p>This is where the project will go</p>
            </div>
        </div>
     );
}
 
export default Projects;