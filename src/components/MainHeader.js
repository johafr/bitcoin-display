import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const MainHeader = () => {
  return (
    <AppBar sx={{ backgroundColor: "#212121", boxShadow: "none" }}>
      <Toolbar
        sx={{ justifyContent: "center", display: "flex" }}
        variant="dense"
      >
        <Typography variant="h4">Bitcoin-tracker</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
