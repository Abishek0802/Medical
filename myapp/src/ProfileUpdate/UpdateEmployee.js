import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddImg from "./AddImg";
import Box from "@mui/material/Box";

const EmployeeCard = () => {
  const [name, setName] = useState("Employee Name");
  const [degree, setDegree] = useState("Employee Degree");
  const [role, setRole] = useState("Medical Shop Employee");
  const [address, setAddress] = useState("Employee Address");
  const [number, setNumber] = useState("Employee Number");
  const [experience, setExperience] = useState("Employee Experience");

  const [errors, setErrors] = useState({
    name: false,
    degree: false,
    role: false,
    address: false,
    number: false,
    experience: false,
  });

  const handleUpdateProfile = () => {
    // Implement your logic to update the profile
    const validationErrors = validateFields();
    if (Object.values(validationErrors).some((error) => error)) {
      // If there are validation errors, don't update the profile
      console.log("Validation errors:", validationErrors);
    } else {
      // Update the profile
      console.log("Profile Updated:", {
        name,
        degree,
        role,
        address,
        number,
        experience,
      });
    }
  };

  const validateFields = () => {
    const newErrors = {
      name: name.trim() === "",
      degree: degree.trim() === "",
      role: role.trim() === "",
      address: address.trim() === "",
      number: !/^\d+$/.test(number),
      experience: experience.trim() === "",
    };

    setErrors(newErrors);
    return newErrors;
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
            error={errors.degree}
            helperText={errors.degree ? "Degree is required" : ""}
          />
          <TextField
            sx={{ paddingTop: "20px" }}
            variant="outlined"
            fullWidth
            value={role}
            onChange={(e) => setRole(e.target.value)}
            error={errors.role}
            helperText={errors.role ? "Role is required" : ""}
          />
          <TextField
            sx={{ paddingTop: "20px" }}
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            error={errors.address}
            helperText={errors.address ? "Address is required" : ""}
          />
          <TextField
            sx={{ paddingTop: "20px" }}
            variant="outlined"
            fullWidth
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            error={errors.number}
            helperText={errors.number ? "Invalid number" : ""}
          />
          <TextField
            sx={{ paddingTop: "20px" }}
            variant="outlined"
            fullWidth
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            error={errors.experience}
            helperText={errors.experience ? "Experience is required" : ""}
          />
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ position: "relative", bottom: "20px", right: "10px" }}>
            <AddImg />
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpdateProfile}
          >
            Update Profile
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default EmployeeCard;
