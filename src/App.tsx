import './App.scss';
import { Outlet } from "react-router"
import Navbar from './components/Navbar/Navbar.tsx';
import Layout from './components/Layout/Layout.tsx';

function App() {
  return (
    <div>
      <Navbar/>
      <Layout/>
      <Outlet/>
      <p>Hello from App.js</p>
    </div>
  );
}

export default App;
