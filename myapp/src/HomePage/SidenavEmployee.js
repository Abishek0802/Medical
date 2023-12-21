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
                backgroundColor: "white",
                color: "black",
                width: "100%",
                marginTop: "10px",
              }}
              {...bindTrigger(popupState)}
            >
              <DashboardIcon sx={{ marginRight: "40px" }} /> DASHBOARD
            </Button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem sx={{ width: "270px" }}>
                <PersonPinIcon />{" "}
                <Link to="/OwnerProfile">
                  <Typography className="typo">Owner Profile</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <PersonPinIcon />
                <Link to="/EmployeeProfile" className="typo">
                  Employee Profile
                </Link>{" "}
              </MenuItem>
              <MenuItem>
                <PlaceIcon />
                <Link className="typo">Location</Link>
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
              }}
              {...bindTrigger(popupState)}
            >
              <CheckCircleIcon sx={{ marginRight: "20px" }} /> Home Delivery
            </Button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem sx={{ width: "270px" }}>
                <CallIcon />{" "}
                <Button>
                  <Link className="typo">+919944540222</Link>
                </Button>
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </>
  );
}
