import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import styled from "styled-components";

const Navigation = () => {
  const StyledAppBar = styled(AppBar)`
    background-color: #0d3e79;
  `;

  const LoginButton = styled(Button)`
    && {
      position: absolute;
      right: 0;
    }
  `;

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Mobile Signals Work Order</Typography>
        <LoginButton color="inherit">Login</LoginButton>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navigation;
