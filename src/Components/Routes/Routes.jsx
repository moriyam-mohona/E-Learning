import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home/Home";
import CourseDetails from "../Pages/Home/CourseCard/CourseDetails";
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
        path: "/course-details/:id",
        element: <CourseDetails />,
      },
    ],
  },
]);
