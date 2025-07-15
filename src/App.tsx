import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Assignments } from "./screens/Assignments";
import { ComingUpMain } from "./screens/ComingUpMain";
import { Courses } from "./screens/Courses/Courses";
import { Mpdm } from "./screens/Mpdm";
import { Readings } from "./screens/Readings";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <ComingUpMain />,
  },
  {
    path: "/coming-up-u40mainu41",
    element: <ComingUpMain />,
  },
  {
    path: "/assignments",
    element: <Assignments />,
  },
  {
    path: "/readings",
    element: <Readings />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/mpdm-884",
    element: <Mpdm />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
