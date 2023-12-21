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
const HomePage =[<AppBar/>]

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/OwnerProfile/*" element={<OwnerProfile />} />
        <Route path="/EmployeeProfile/*" element={<EmployeeProfile />} />
        <Route path="/UpdateOwner/*" element={<UpdateOwner />} />
        <Route path="/UpdateEmployee/*" element={<UpdateEmployee />} />
     
      </Routes>
    </BrowserRouter>
  );
}














