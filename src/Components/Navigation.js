import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import styled from "styled-components";

const Navigation = () => {
  const StyledAppBar = styled(AppBar)`
    background-color: #0d3e79;
  `;

  const StyledAccountCircleIcon = styled(AccountCircleIcon)`
    position: absolute;
    right: 20px;
    font-size: 36px;
    color: white;
  `;

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Mobile Signals Work Order</Typography>
        <StyledAccountCircleIcon />
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navigation;
