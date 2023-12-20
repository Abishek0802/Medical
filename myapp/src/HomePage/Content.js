import React from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import img1 from "./am.jpeg";
import Content2 from "./Content2.js";
import Content3 from "./Content3.js";

import Box from "@mui/material/Box";
import "./Content.css";
import FeedbackForm from "./Feedback.js";
import Footer from "./Footer.js";
const ResponsiveCard = () => {
  const cardStyle = {
    maxWidth: 400,
    margin: "auto",
    // Replace with the desired numeric value
  };

  return (
    <>
      <Card
        className="Card"
        sx={{ backgroundColor: "aliceblue", borderBottomRightRadius: "40px" }}
        style={cardStyle}
      >
        <CardContent>
          <Grid className="grid1" item xs={12} sm={6}>
            <img
              src={img1}
              alt="About Us"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "50%",
              }}
            />
          </Grid>
          <Box sx={{ paddingTop: "20px" }}>
            <Typography
              sx={{ textAlign: "center" }}
              variant="h6"
              component="div"
            >
              About Us
            </Typography>
            <Typography
              sx={{ textAlign: "center" }}
              variant="h3"
              component="div"
            >
              Dr.Murugadas
            </Typography>
            <Typography sx={{ textAlign: "center" }} variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              hendrerit justo eget lacus iaculis aliquet. Nullam nec turpis non
              velit bibendum tristique. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia Curae; Integer varius
              lectus eu arcu vestibulum, at malesuada quam feugiat. Proin
              euismod, velit vel fermentum sagittis, dui libero laoreet purus,
              ut fermentum ex justo vel purus. Vestibulum eu elit at mi dictum
              sagittis.
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <div>
        <Content2 />
        <Content3 />

        <FeedbackForm />
        <Footer />
      </div>
    </>
  );
};

export default ResponsiveCard;
