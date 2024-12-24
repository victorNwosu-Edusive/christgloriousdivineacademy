import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ErrorPage from "./Errorpage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />, // Navbar includes the Outlet
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />, // Render Homepage for the index route
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "academics",
        element: <Academics />,
      },
      {
        path: "admissions",
        element: <Admissions />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
