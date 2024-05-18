import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar.tsx';
import HomeScreen from './screens/HomeScreen/HomeScreen.tsx';
import WorkWithMe from './screens/WorkWithMe/WorkWithMe.tsx';
import MyJourney from './screens/MyJourney/MyJourney.tsx';
import Footer from './components/Footer.tsx';


function App() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"/>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeScreen />}/>          
        <Route path='/work-with-me' element={<WorkWithMe />}/>          
        <Route path="/my-journey" element={<MyJourney/>} />          
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
