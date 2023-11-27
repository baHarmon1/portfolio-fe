import Footer from "../../components/Footer/Footer.tsx";
import Header from "../../components/Header/Header.tsx";
import Projects from "../../components/Projects/Projects.tsx";
import References from "../../components/References/References.tsx";
import Skills from "../../components/Skills/Skills.tsx";
import "./HomeScreen.scss"

interface Props {}

function HomeScreen(props: Props) {
    return ( 
        <div>
            This is the Home Page
            <Header/>
            <Skills/>
            <Projects/>
            <References/>
        </div>
     );
}

export default HomeScreen;
