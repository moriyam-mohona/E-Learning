import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home/Home";
import CourseDetails from "../Pages/Home/CourseCard/CourseDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />, // Fallback for errors
    children: [
      {
        path: "", // This will match the root URL
        element: <Home />,
      },
      {
        path: "course-details/:id", // Ensure paths are relative
        element: <CourseDetails />,
      },
    ],
  },
]);
