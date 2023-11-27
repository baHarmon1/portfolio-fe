import {createBrowserRouter} from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen/HomeScreen.tsx';
import ErrorPage from '../screens/ErrorPage/ErrorPage.tsx';
import TestPage from '../screens/TestPage/TestPage.tsx';
import App from '../App.tsx';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: '', element: <HomeScreen/> },
    ]
  },
  {
    path: "/error",
    element: <ErrorPage/>,
  },
  {
    path: "/test",
    element: <TestPage/>,
  },
])