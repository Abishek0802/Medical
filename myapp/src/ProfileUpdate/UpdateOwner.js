import React, { useState } from 'react';
import AddImg from "./AddImg.js"
import { Card, CardContent, CardHeader, Button, Avatar, TextField } from '@mui/material';

const MedicalShopOwnerProfileCard = () => {
  const [name, setName] = useState('Medical Shop Owner Name');
  const [number, setNumber] = useState('+1234567890');
  const [address, setAddress] = useState('123 Medical Street, City');
  const [experience, setExperience] = useState('X years');
  const [image, ] = useState('path/to/your/image.jpg');

  const handleUpdateProfile = () => {
    // Implement your logic to update the profile
    console.log('Profile Updated:', { name, number, address, experience, image });
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            alt="Medical Shop Owner"
            src={image}
            style={{ borderRadius: '50%', width: '80px', height: '80px' }}
          />
        }
        title={name}
        subheader={`Experience: ${experience}`}
      />
      <CardContent>
        <TextField
         sx={{paddingTop:"20px"}}
         
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
         sx={{paddingTop:"20px"}}
        
          variant="outlined"
          fullWidth
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <TextField
         sx={{paddingTop:"20px"}}
          
          variant="outlined"
          fullWidth
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
         sx={{paddingTop:"20px"}}
        
          variant="outlined"
          fullWidth
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <AddImg/>
      </CardContent>
      <CardContent>
        <Button size="large" variant="contained" color="primary" onClick={handleUpdateProfile}>
          Update Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default MedicalShopOwnerProfileCard;
