import React from 'react';
import { Card, CardContent, CardHeader, Button, Avatar, Typography } from '@mui/material';
import ownerimg from "./owner1.1.jpg"
import {Link} from "react-router-dom";

const MedicalShopOwnerProfileCard = () => {
  const owner = {
    backgroundImage: `
    radial-gradient(circle at 13% 47%, rgba(140, 140, 140,0.03) 0%, rgba(140, 140, 140,0.03) 25%,transparent 25%, transparent 100%),
    radial-gradient(circle at 28% 63%, rgba(143, 143, 143,0.03) 0%, rgba(143, 143, 143,0.03) 16%,transparent 16%, transparent 100%),
    radial-gradient(circle at 81% 56%, rgba(65, 65, 65,0.03) 0%, rgba(65, 65, 65,0.03) 12%,transparent 12%, transparent 100%),
    radial-gradient(circle at 26% 48%, rgba(60, 60, 60,0.03) 0%, rgba(60, 60, 60,0.03) 6%,transparent 6%, transparent 100%),
    radial-gradient(circle at 97% 17%, rgba(150, 150, 150,0.03) 0%, rgba(150, 150, 150,0.03) 56%,transparent 56%, transparent 100%),
    radial-gradient(circle at 50% 100%, rgba(25, 25, 25,0.03) 0%, rgba(25, 25, 25,0.03) 36%,transparent 36%, transparent 100%),
    radial-gradient(circle at 55% 52%, rgba(69, 69, 69,0.03) 0%, rgba(69, 69, 69,0.03) 6%,transparent 6%, transparent 100%),
    linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255))
  `,
    borderRadius: "20px",
    backgroundSize: "100% 100%",
  };
  return (
    <Card
      style={owner}
      sx={{
        position: "relative",
        top: "20px",
        maxWidth: 345,
        left: "20px",
        height: "400px",
      }}
    >
      <CardHeader
        avatar={
          <Box className="avatar">
            <Avatar
              alt="Medical Shop Owner"
              src={ownerimg}
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            />
          </Box>
        }
        title="MURUGADAS"
        subheader="Experience: 40 years"
      />
      <CardContent>
        <div>
          <strong>Number:</strong>+91 9944540222
        </div>
        <div>
          <strong>Address:</strong> 123 Medical Street, City
        </div>
      </CardContent>
      <CardContent>
        <Button variant="contained">
          <Link style={{ textDecoration: "none" }} to="/UpdateOwner">
            <Typography style={{ color: "white" }}>Update Profile</Typography>
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default MedicalShopOwnerProfileCard;
