import {createBrowserRouter} from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen.tsx';
import ErrorPage from '../screens/ErrorPage.tsx';
import WorkWithMe from '../screens/WorkWithMe.tsx';
import MyJourney from '../screens/MyJourney.tsx';
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