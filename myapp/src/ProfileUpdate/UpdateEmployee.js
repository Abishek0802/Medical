import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddImg from "./AddImg"
import Box from '@mui/material/Box';


const EmployeeCard = () => {
  const [name, setName] = useState('Employee Name');
  const [degree, setDegree] = useState('Employee Degree');
  const [role, setRole] = useState('Medical Shop Employee');
  const [address, setAddress] = useState('Employee Address');
  const [number, setNumber] = useState('Employee Number');
  const [experience, setExperience] = useState('Employee Experience');

  const handleUpdateProfile = () => {
    // Implement your logic to update the profile
    console.log('Profile Updated:', { name, degree, role, address, number, experience });
  };

  return (
    <>
      <Card
        sx={{
          position: "relative",
          left: "20px",
          top: "20px",
          maxWidth: 345,
          borderRadius: "20px",
        }}
      >
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <TextField
          sx={{ paddingTop: "20px" }}
            variant="outlined"
            fullWidth
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
          <TextField
          sx={{ paddingTop: "20px" }}
          
            variant="outlined"
            fullWidth
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <TextField
          sx={{ paddingTop: "20px" }}
          
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
          sx={{ paddingTop: "20px" }}
           
            variant="outlined"
            fullWidth
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <TextField
          sx={{ paddingTop: "20px" }}
            
            variant="outlined"
            fullWidth
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{position:"relative",bottom:'20px',right:"10px"}}> <AddImg />
            </Box>
       
          <Button variant="contained" color="primary" onClick={handleUpdateProfile}>
            Update Profile
          </Button>
          
        </CardContent>
      </Card>
      {/* employee2 */}
      {/* ... (similar changes for the second and third card components) */}
    </>
  );
};

export default EmployeeCard;
