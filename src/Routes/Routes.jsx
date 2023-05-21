import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BlogPage from "../Pages/BlogPage/BlogPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import MyToy from "../MyToy/MyToy";
import AddToy from "../AddToy/AddToy";
import AllToy from "../AllToy/AllToy";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ViewDetails from "../AllToy/ViewDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path:'/',
            element: <Home/>
        },
        {
          path: '/blog',
          element: <BlogPage/>,
        },
        {
          path:'/signUp',
          element: <SignUp/>,
          },
        {
          path:'/login',
          element: <Login/>,
        },
       
        {
          path: '/allToy',
          element: <AllToy/>,
          loader: () => fetch('http://localhost:5000/addToys')
          
        },
        {
          path: '/myToy',
          element: <PrivateRoute><MyToy/></PrivateRoute>,
        },
        {
          path:'/addToy',
          element: <PrivateRoute><AddToy/></PrivateRoute>,
        },
        {
          path: '/details/:id',
          element:<PrivateRoute><ViewDetails/></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/addToys/${params.id}`)
        }
       

      ]
    },
  ]);

  export default router;