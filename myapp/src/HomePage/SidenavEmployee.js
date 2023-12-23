import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import PlaceIcon from "@mui/icons-material/Place";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import CallIcon from "@mui/icons-material/Call";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import "./SidenavEmployee.css";
import { Typography } from "@mui/material";
import { useState } from "react";

export default function MenuPopupState() {
  return (
    <>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button
              style={{
                fontFamily: "'Ubuntu', sans-serif",
                backgroundColor: "white",
                color: "black",
                width: "100%",
                marginTop: "10px",
              }}
              {...bindTrigger(popupState)}
            >
              <DashboardIcon
                sx={{ marginRight: "40px", fontFamily: "'Ubuntu', sans-serif" }}
              />{" "}
              DASHBOARD
            </Button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem sx={{ width: "270px" }}>
                <PersonPinIcon />{" "}
                <Link
                  className="typo"
                  style={{
                    textDecoration: "none",
                    fontFamily: "'Ubuntu', sans-serif",
                  }}
                  to="/OwnerProfile"
                >
                  Owner Profile
                </Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <PersonPinIcon />
                <Link
                  style={{
                    textDecoration: "none",
                    fontFamily: "'Ubuntu', sans-serif",
                  }}
                  to="/EmployeeProfile"
                  className="typo"
                >
                  Employee Profile
                </Link>{" "}
              </MenuItem>
              <MenuItem>
                <PlaceIcon />
                <a
                  href="https://g.co/kgs/td9z1Q"
                  style={{
                    textDecoration: "none",
                    fontFamily: "'Ubuntu', sans-serif",
                  }}
                  className="typo"
                >
                  Location
                </a>
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button
              style={{
                backgroundColor: "white",
                color: "green",
                width: "100%",
                marginTop: "10px",
                fontFamily: "'Ubuntu', sans-serif",
              }}
              {...bindTrigger(popupState)}
            >
              <CheckCircleIcon sx={{ marginRight: "20px" }} /> Home Delivery
            </Button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem sx={{ width: "270px" }}>
                <CallIcon />{" "}
                <Button>
                  <a
                    href="tel:+918248309125"
                    style={{
                      textDecoration: "none",
                      fontFamily: "'Ubuntu', sans-serif",
                    }}
                    className="typo"
                  >
                    +918248309125
                  </a>
                </Button>
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </>
  );
}
