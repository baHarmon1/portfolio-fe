import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Projects from "../components/Projects.tsx";
import References from "../components/References.tsx";
import Skills from "../components/Skills.tsx";
import "../scss/styles.scss"

interface Props {}

function HomeScreen(props: Props) {
    return ( 
        <div className="homepage-body">
            This is the Home Page
            <Header/>
            <Skills/>
            <Projects/>
            <References/>
        </div>
     );
}

export default HomeScreen;
