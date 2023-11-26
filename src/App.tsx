import './App.css';
import { Outlet } from "react-router"
import Navbar from './components/Navbar/Navbar.tsx';

function App() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <p>Hello from App.js</p>
    </div>
  );
}

export default App;
