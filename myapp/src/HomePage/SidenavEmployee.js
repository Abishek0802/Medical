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

import { Link } from "@mui/material";

export default function MenuPopupState() {
  return (
    <>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button
              sx={{
                color: "black",
                backgroundColor: "white",
                width: "100%",
              }}
              variant="contained"
              {...bindTrigger(popupState)}
            >
              <DashboardIcon sx={{ marginRight: "40px" }} /> Dashboard
            </Button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem sx={{ width: "270px" }}>
                <PersonPinIcon />{" "}
                <Link
                  sx={{
                    paddingLeft: "20px",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Owner Profile
                </Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <PersonPinIcon />
                <Link
                  sx={{
                    paddingLeft: "20px",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Employee Profile
                </Link>{" "}
              </MenuItem>
              <MenuItem>
                <PlaceIcon />
                <Link
                  sx={{
                    paddingLeft: "20px",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Location
                </Link>
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button
              sx={{
                color: "black",
                backgroundColor: "white",
                width: "100%",
                marginTop: "10px",
              }}
              variant="contained"
              {...bindTrigger(popupState)}
            >
              <CheckCircleIcon sx={{ marginRight: "20px" }} /> Home Delivery
            </Button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem sx={{ width: "270px" }}>
                <CallIcon />{" "}
                <Link
                  sx={{
                    paddingLeft: "20px",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Call<Link sx={{ paddingLeft: "10px" }}>+919944540222</Link>
                </Link>
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </>
  );
}
