import React from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";

const ResponsiveCard = () => {
  const cardStyle = {
    maxWidth: 400,
    margin: "auto",
    marginTop: 20,
    backgroundImage:
      "linear-gradient(135deg, rgb(208, 57, 227) 0%, rgb(208, 57, 227) 1%, rgb(218, 94, 219) 1%, rgb(218, 94, 219) 24%, rgb(228, 130, 212) 24%, rgb(228, 130, 212) 30%, rgb(238, 167, 204) 30%, rgb(238, 167, 204) 73%, rgb(248, 203, 196) 73%, rgb(248, 203, 196) 100%),linear-gradient(45deg, rgb(208, 57, 227) 0%, rgb(208, 57, 227) 1%, rgb(218, 94, 219) 1%, rgb(218, 94, 219) 24%, rgb(228, 130, 212) 24%, rgb(228, 130, 212) 30%, rgb(238, 167, 204) 30%, rgb(238, 167, 204) 73%, rgb(248, 203, 196) 73%, rgb(248, 203, 196) 100%),linear-gradient(0deg, rgb(208, 57, 227) 0%, rgb(208, 57, 227) 1%, rgb(218, 94, 219) 1%, rgb(218, 94, 219) 24%, rgb(228, 130, 212) 24%, rgb(228, 130, 212) 30%, rgb(238, 167, 204) 30%, rgb(238, 167, 204) 73%, rgb(248, 203, 196) 73%, rgb(248, 203, 196) 100%),linear-gradient(90deg, rgb(51, 80, 234), rgb(213, 245, 101))",
    backgroundBlendMode: "overlay, overlay, overlay, normal", // Replace with the desired numeric value
  };

  return (
    <Card
      sx={{ borderTopLeftRadius: "40px", borderBottomLeftRadius: "40px" }}
      style={cardStyle}
    >
      <CardContent>
        <Typography sx={{ textAlign: "center" }} variant="h3" component="div">
          Our Journey
        </Typography>
        <Typography sx={{ textAlign: "center" }} variant="body1" paragraph>
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
