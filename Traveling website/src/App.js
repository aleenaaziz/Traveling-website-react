import "./App.css";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import Services from "./component/pages/Services";
import Product from "./component/pages/Product";
import SignUp from "./component/pages/SignUp";

function App() {
  return (
    <div>
        <Navbar />
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
