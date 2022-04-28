import React from "react";
import { makeStyles } from "@material-ui/styles";
import MainHeader from "./MainHeader";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MainHeader />
      <div className={classes.screens}>
        <div className={classes.AppBar} />
        {children}
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  screens: {
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#f9f9f9",
  },
  AppBar: {
    height: 48,
  },
}));

export default Layout;
