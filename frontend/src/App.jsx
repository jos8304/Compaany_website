import "./App.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainPage from "./Page/MainPage/Mainpage.jsx";
import Leadership from "./Page/Leadership/Leadership.jsx";
import About from "./Page/About/about.jsx";
import Board from "./Page/Board/Board.jsx";
import Services from "./Page/Services/Services.jsx";
import Contact from "./Page/MainPage/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import NavBar from "./Components/Navber/Navbar.jsx";

function Layout() {
  return (
    <>
      <NavBar />
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
        element: <MainPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/leadership",
        element: <Leadership />,
      },
      {
        path: "/board",
        element: <Board />,
      },
      {
        path: "/our-services",
        element: <Services />,
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
