import {createBrowserRouter} from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen/HomeScreen.tsx';
import ErrorPage from '../screens/ErrorPage/ErrorPage.tsx';
import WorkWithMe from '../screens/WorkWithMe/WorkWithMe.tsx';
import MyJourney from '../screens/MyJourney/MyJourney.tsx';
import App from '../App.tsx';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: '', element: <HomeScreen/> },
      {path: "/work-with-me", element: <WorkWithMe/> },
      {path: "/my-journey", element: <MyJourney/> },
    ]
  },
  {
    path: "/error",
    element: <ErrorPage/>,
  },
])