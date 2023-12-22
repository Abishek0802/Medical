import React from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import img5 from "../Images/tablet.jpg";
import "./Content.css";

const ResponsiveCard = () => {
  const cardStyle = {
    maxWidth: 400,
    margin: "auto",
    marginTop: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  };

  return (
    <Card
      sx={{
        borderTopLeftRadius: "40px",
        borderBottomLeftRadius: "40px",
      }}
      style={cardStyle}
      className="background"
    >
      <CardContent>
        <Typography
          sx={{ textAlign: "center", fontFamily: "'Ubuntu', sans-serif" }}
          variant="h4"
          component="div"
        >
          English Medicine
        </Typography>
        <Box>
          <CardMedia
            style={{
              borderRadius: "30px",
              position: "relative",
              top: "20px",
              boxShadow: "-8px 2px 8px rgba(0, 0, 0, 0.4)",
            }}
            component="img"
            alt="Employee Image"
            height="240"
            image={img5}
          />
        </Box>
        <Typography
          sx={{ textAlign: "center", fontFamily: "'Ubuntu', sans-serif" }}
          variant="body1"
          paragraph
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          hendrerit justo eget lacus iaculis aliquet. Nullam nec turpis non
          velit bibendum tristique. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia Curae; Integer varius lectus
          eu arcu vestibulum, at malesuada quam feugiat. Proin euismod, velit
          vel fermentum sagittis, dui libero laoreet purus, ut fermentum ex
          justo vel purus. Vestibulum eu elit at mi dictum sagittis.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ResponsiveCard;
