import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import img1 from "./employee.jpeg";
import img2 from "./employee2.jpg";
import img3 from "./employee3.jpeg";
import { Link } from "react-router-dom";

const EmployeeCard = () => {
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
        <CardMedia
          component="img"
          alt="Employee Image"
          height="240"
          image={img1} // Replace with your employee image URL
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
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button  variant="contained" color="primary">
           <Link style={{textDecoration:"none",color:"white"}} to="/UpdateEmployee">Update Profile</Link> 
          </Button>
          <Button variant="contained" color="error">
            Delete Profile
          </Button>
        </CardContent>
      </Card>
      {/* employee2 */}
      <Card
        sx={{
          position: "relative",
          left: "20px",
          top: "30px",
          maxWidth: 345,
          borderRadius: "20px",
        }}
      >
        <CardMedia
          component="img"
          alt="Employee Image"
          height="240"
          image={img2}
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
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button  variant="contained" color="primary">
          <Link style={{textDecoration:"none",color:"white"}} to="/UpdateEmployee">Update Profile</Link>
          </Button>
          <Button variant="contained" color="error">
            Delete Profile
          </Button>
        </CardContent>
      </Card>
      {/* employee3 */}
      <Card
        sx={{
          position: "relative",
          left: "20px",
          top: "50px",
          maxWidth: 345,
          borderRadius: "20px",
        }}
      >
        <CardMedia
          component="img"
          alt="Employee Image"
          height="240"
          image={img3}
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
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="contained" color="primary">
          <Link style={{textDecoration:"none",color:"white"}} to="/UpdateEmployee">Update Profile</Link>
          </Button>
          <Button variant="contained" color="error">
            Delete Profile
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default EmployeeCard;
