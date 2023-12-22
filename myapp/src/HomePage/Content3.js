import React from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import img4 from "../Images/cow3.jpg";

const ResponsiveCard = () => {
  const cardStyle = {
    maxWidth: 400,
    margin: "auto",
    marginTop: 20,
    backgroundImage: `
    linear-gradient(270deg, rgb(209, 209, 209), rgb(207, 207, 207)),
    linear-gradient(225deg, rgb(177, 223, 206) 0%, rgb(177, 223, 206) 46%, rgb(147, 192, 214) 46%, rgb(147, 192, 214) 56%, rgb(117, 162, 222) 56%, rgb(117, 162, 222) 61%, rgb(86, 131, 229) 61%, rgb(86, 131, 229) 64%, rgb(56, 101, 237) 64%, rgb(56, 101, 237) 82%, rgb(26, 70, 245) 82%, rgb(26, 70, 245) 100%),
    linear-gradient(315deg, rgb(177, 223, 206) 0%, rgb(177, 223, 206) 46%, rgb(147, 192, 214) 46%, rgb(147, 192, 214) 56%, rgb(117, 162, 222) 56%, rgb(117, 162, 222) 61%, rgb(86, 131, 229) 61%, rgb(86, 131, 229) 64%, rgb(56, 101, 237) 64%, rgb(56, 101, 237) 82%, rgb(26, 70, 245) 82%, rgb(26, 70, 245) 100%)
  `,
    backgroundBlendMode: "overlay, overlay, normal",

    boxShadow: "-8px 2px 8px rgba(0, 0, 0, 0.4)",
  };

  return (
    <Card
      sx={{ borderTopRightRadius: "40px", borderBottomRightRadius: "40px" }}
      style={cardStyle}
    >
      <CardContent>
        <Typography
          sx={{ textAlign: "center", fontFamily: "'Ubuntu', sans-serif" }}
          variant="h4"
          component="div"
        >
          veterinary Medicine
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
            image={img4}
          />
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            paddingTop: "20px",
            fontFamily: "'Ubuntu', sans-serif",
          }}
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
