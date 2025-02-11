import "./App.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainPage from "./Page/MainPage/Mainpage";
import Leadership from "./Page/Leadership/Leadership";
import About from "./Page/About/about";
import Board from "./Page/Board/board";
import Services from "./Page/Services/Services";
import Contact from "./Page/MainPage/Contact";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Navber/Navbar";

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
