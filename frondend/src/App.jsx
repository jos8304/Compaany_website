import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navber/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
