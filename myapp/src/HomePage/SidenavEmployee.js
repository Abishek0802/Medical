import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import PlaceIcon from '@mui/icons-material/Place';
import PersonPinIcon from '@mui/icons-material/PersonPin';

import { Link } from '@mui/material';

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button sx={{color:"black",backgroundColor:"white",width:"100%"}} variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem  sx={{width:"270px"}} ><PersonPinIcon/> <Link sx={{paddingLeft:"20px",textDecoration:"none",color:"black"}}>Owner Profile</Link></MenuItem>
            <MenuItem  > <PersonPinIcon/><Link sx={{paddingLeft:"20px",textDecoration:"none",color:"black"}}>Employee Profile</Link> </MenuItem>
            <MenuItem  ><PlaceIcon/><Link sx={{paddingLeft:"20px",textDecoration:"none",color:"black"}}>Location</Link></MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}