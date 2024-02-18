import {
  BrowserRouter,
 
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import AppBar from "./HomePage/AppBar"
import OwnerProfile from "./Profiles/OwnerProfile";
import EmployeeProfile from "./Profiles/EmployeeProfile";
import UpdateOwner from "./ProfileUpdate/UpdateOwner";
import UpdateEmployee from "./ProfileUpdate/UpdateEmployee";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login"

const HomePage =[<AppBar/>]

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Register />} />
        <Route path="/OwnerProfile/*" element={<OwnerProfile />} />
        <Route path="/EmployeeProfile/*" element={<EmployeeProfile />} />
        <Route path="/UpdateOwner/*" element={<UpdateOwner />} />
        <Route path="/UpdateEmployee/*" element={<UpdateEmployee />} />
        <Route path="/HomePage" element={HomePage} />
        <Route path="/Login" element={<Login/>} />
     
      </Routes>
    </BrowserRouter>
  );
}














