import React from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import img1 from "./logo2.jpg";
import Content2 from "./Content2.js";
import Content3 from "./Content3.js";

import Box from "@mui/material/Box";
import "./Content2.css";
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
        sx={{
          backgroundColor: "aliceblue",
          height: "750px",
        }}
        style={cardStyle}
      >
        <CardContent>
          <Grid className="grid1" item xs={12} sm={6}>
            <img
              src={img1}
              alt="About Us"
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "5%",
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
            <Box className="content1-Image">
              <Typography
                className="typo1"
                style={{ display: "flex" }}
                sx={{ textAlign: "center", fontFamily: "'Ubuntu', sans-serif" }}
                variant="h3"
                component="div"
                position="relative"
                top="20px"
                left="10px"
              >
                M.Murugadas
                <Typography
                  style={{
                    fontFamily: "'Ubuntu', sans-serif",
                    position: "relative",
                    top: "40px",
                    fontSize: "small",
                  }}
                >
                  -Owner
                </Typography>
              </Typography>
              <Typography
                className="typo"
                sx={{
                  textAlign: "center",
                  position: "relative",
                  top: "70px",
                }}
                variant="body1"
                paragraph
              >
                Chemists play a key role in our lives at the time of illness. By
                offering almost all kinds of medicines, they have become the
                lifeline for many. Apart from medicines, they also sell products
                for skin and health care. Chemists also called pharmacists, are
                found in every corner of the city. Some of them often have
                tie-ups with big doctors and hospitals.f you need medicine for
                your first aid kit or want to buy medicine prescribed by your
                doctor, you should get in contact with Ashok Medicals in
                Mandhakarai, Villupuram. They are well-known in Vi lupuram for a
                variety of services, such as Home Delivery. Lorem ipsum dolor
              </Typography>
            </Box>
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
