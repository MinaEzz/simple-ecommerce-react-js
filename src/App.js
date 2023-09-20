import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Productdetails from "./components/productdetails/Productdetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/product/:productId" element={<Productdetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
