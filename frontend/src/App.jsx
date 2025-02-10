import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navber/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Mainpage from "./Page/MainPage/Mainpage";
import About from "./Page/About/about";
import Services from "./Page/Services/Services";
import Contact from "./Page/Contact/Contact";
import Teams from "./Page/Teams/Teams";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Mainpage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/team",
        element: <Teams />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
