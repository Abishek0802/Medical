// ... (other imports)
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  Container,
  Box,
  MenuItem,
  Menu,
  Typography,
} from "@mui/material";
import BarLoader from "react-spinners/BarLoader";
import React, { Component } from "react";
import Content from "./Content.js";
import SidenavEmployee from "./SidenavEmployee.js";
import "./AppBar.css";
import MenuIcon from "@mui/icons-material/Menu";
// for icon
import MedicationIcon from "@mui/icons-material/Medication";

const label = { inputProps: { "aria-label": "Switch demo" } };

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      anchorEl: null,
    };
  }

  handleDrawerToggle = () => {
    this.setState((prevState) => ({
      drawerOpen: !prevState.drawerOpen,
    }));
  };

  handleMenuOpen = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleMenuClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const containerStyle = {
      backgroundImage:
        "radial-gradient(circle at top right, rgb(13, 141, 190) 0%, rgb(13, 141, 190) 46%,rgb(22, 153, 204) 46%, rgb(22, 153, 204) 49%,rgb(31, 166, 217) 49%, rgb(31, 166, 217) 52%,rgb(40, 178, 231) 52%, rgb(40, 178, 231) 54%,rgb(49, 190, 244) 54%, rgb(49, 190, 244) 100%)",
      height: "100vh",
    };
    const { drawerOpen = false, anchorEl = null } = this.state;
    const drawerItems = (
      <Box style={containerStyle}>
        <List>
          <Typography
            fontFamily="'Ubuntu', sans-serif"
            to="/Next"
            variant="h6"
            sx={{ textAlign: "center", color: "black", fontSize: "30px" }}
          >
            Ashok Medicals
            <BarLoader
              style={{ marginTop: "40%" }}
              color="#000000"
              height={5}
              width={150}
              speedMultiplier={0.3}
            />
          </Typography>

          {/* this is SidenavEmployee */}
          <div>
            <SidenavEmployee />
          </div>
        </List>
      </Box>
    );

    const menuItems = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id="primary-search-account-menu"
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={Boolean(anchorEl)}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Topic 1</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Topic 2</MenuItem>
      </Menu>
    );

    return (
      <>
        <div
          className="body"
          style={{
            flexGrow: 1,
            height: "100px",
          }}
        >
          <AppBar
            position="static"
            style={{
              color: "white",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                style={{ marginRight: "16px" }}
                color="black"
                onClick={this.handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Container>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <Typography
                      style={{ display: "flex" }}
                      sx={{
                        fontFamily: "'Ubuntu', sans-serif",
                        color: "black",
                        position: "relative",
                        top: "10px",
                        marginLeft: "10px",
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}
                      variant="h5"
                    >
                      Ashok Medicals{" "}
                      <Typography
                        style={{
                          fontFamily: "'Ubuntu', sans-serif",
                          position: "relative",
                          top: "20px",
                          fontSize: "small",
                        }}
                      >
                        (villupuram)
                      </Typography>
                    </Typography>
                  </div>
                  <div style={{ flexGrow: 1 }} />

                  <div
                    style={{
                      color: "green",
                      position: "relative",
                      left: "10px",
                    }}
                  >
                    <MedicationIcon />
                  </div>
                </div>
              </Container>
            </Toolbar>
          </AppBar>
          <Box>
            {" "}
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={this.handleDrawerToggle}
              PaperProps={{
                style: {
                  width: "300px",
                  backgroundColor: "grey",
                  color: "white",
                },
              }}
            >
              {drawerItems}
            </Drawer>
            {menuItems}
          </Box>
        </div>
        <div>
          <Content />
        </div>
      </>
    );
  }
}

export default NavBar;
