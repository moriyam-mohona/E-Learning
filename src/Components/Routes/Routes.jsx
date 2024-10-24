import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home/Home";
import CourseDetails from "../Pages/Home/CourseCard/CourseDetails";
import Blog from "../Pages/Blog/Blog";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/course-details/:id",
        element: <CourseDetails />,
      },
    ],
  },
]);
