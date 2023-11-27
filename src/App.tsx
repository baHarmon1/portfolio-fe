import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar.tsx';
import HomeScreen from './screens/HomeScreen/HomeScreen.tsx';
import WorkWithMe from './screens/WorkWithMe/WorkWithMe.tsx';
import MyJourney from './screens/MyJourney/MyJourney.tsx';
import Footer from './components/Footer/Footer.tsx';

function App() {
  return (
    <div>
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
