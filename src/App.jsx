import './App.css';
import HomePage from "./pages/HomePage";
import NewArrivals from "./pages/NewArrivals";
import Shoes from "./pages/Shoes";
import Clothing from "./pages/Clothing";
import Accesories from "./pages/Accesories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/accesories" element={<Accesories />} />
      </Routes>
    </Router>
  );
}

export default App;
