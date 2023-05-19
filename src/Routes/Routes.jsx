import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BlogPage from "../Pages/BlogPage/BlogPage";

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
        }
      ]
    },
  ]);

  export default router;