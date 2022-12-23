import "./App.css";
import Navbar from "./components/Navbar";
import PokeDetail from "./components/PokeDetail";
import { Route, Routes, useLocation } from "react-router";
import Home from "./components/Home";
import Page404 from "./components/Page404";
import Footer from "./components/Footer";


function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/pokemon/:name" element={<PokeDetail />} />
      </Routes>
      {location.pathname === '/' && <Footer />}
      

    </div>
  );
}

export default App;
