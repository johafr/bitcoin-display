import React from "react";
import { makeStyles } from "@material-ui/styles";
import BitcoinTable from "../components/BitcoinTable";

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.Home}>
      <BitcoinTable />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  Home: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default Home;
