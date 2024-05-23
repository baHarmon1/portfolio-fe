import { FunctionComponent } from "react";
import { ImgMediaCard} from "./Project.tsx"
import { DemoCarousel } from "./Carousel.tsx"
import "../scss/styles.scss"



interface ProjectsProps {
    
}
 
const Projects: FunctionComponent<ProjectsProps> = () => {
    return ( 
        <div className="projects-container">
            <div className="carousel-container">
                <DemoCarousel />
            </div>
        </div>
     );
}
 
export default Projects;