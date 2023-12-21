import {
  BrowserRouter,
 
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import AppBar from "./HomePage/AppBar"
import Next from "./demo/Next";
const HomePage =[<AppBar/>]

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/Next/*" element={<Next />} />
     
      </Routes>
    </BrowserRouter>
  );
}














