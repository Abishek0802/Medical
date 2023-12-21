import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import img from "./am.jpeg"


const EmployeeCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Employee Image"
        height="140"
        image={img}  // Replace with your employee image URL
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Employee Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Degree: Employee Degree
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Role: Medical Shop Employee
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Address: Employee Address
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Number: Employee Number
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Experience: Employee Experience
        </Typography>
      </CardContent>
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" color="primary">
          Update Profile
        </Button>
        <Button variant="contained" color="error">
          Delete Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
