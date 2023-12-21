import {
  BrowserRouter,
 
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import AppBar from "./HomePage/AppBar"
import OwnerProfile from "./Profiles/OwnerProfile";
import EmployeeProfile from "./Profiles/EmployeeProfile";
const HomePage =[<AppBar/>]

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/OwnerProfile/*" element={<OwnerProfile />} />
        <Route path="/EmployeeProfile/*" element={<EmployeeProfile />} />
     
      </Routes>
    </BrowserRouter>
  );
}














