import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import Moment from "react-moment";

import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Button,
  Box,
} from "@mui/material";
import { useEffect } from "react";

const BitcoinTable = () => {
  const classes = useStyles();

  useEffect(() => {
    fetchData();
  }, []);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const numRows = 20;
  const pages = [...Array(Math.ceil(data.length / numRows)).keys()];

  const fetchData = async () => {
    const res = await axios.get(
      "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=8ae55d463e1"
    );
    setData(res.data.Data.Data);
  };

  return (
    <Box className={classes.container}>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>High</TableCell>
            <TableCell>Low</TableCell>
            <TableCell>Open</TableCell>
            <TableCell>Close</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * numRows, page * numRows + numRows).map((entry) => (
            <TableRow key={entry.time} sx={{}}>
              <TableCell>
                <td>
                  <Moment unix>{entry.time}</Moment>
                </td>
              </TableCell>
              <TableCell>{entry.high}</TableCell>
              <TableCell>{entry.low}</TableCell>
              <TableCell>{entry.open}</TableCell>
              <TableCell>{entry.close}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box container className={classes.TableFooter}>
        <Button
          variant="outlined"
          disableElevation
          onClick={() => {
            setPage(page > 0 ? page - 1 : 0);
          }}
          sx={{
            backgroundColor: "#dddddd",
            color: "#212121",
            borderColor: "#212121",
            "&:hover": {
              backgroundColor: "#bbbbbb",
              color: "#212121",
              borderColor: "#212121",
            },
          }}
        >
          <ArrowBackSharpIcon fontSize="small" />
        </Button>
        {pages.map((data, index) => (
          <Button
            onClick={() => setPage(index)}
            sx={{
              color: "#212121",
              backgroundColor: "#dddddd",
              borderColor: "#212121",
              "&:hover": {
                backgroundColor: "#bbbbbb",
                color: "#212121",
                borderColor: "#212121",
              },
              marginLeft: 1,
            }}
            variant="outlined"
            size="small"
          >
            {data + 1}
          </Button>
        ))}
        <Button
          variant="outlined"
          disableElevation
          onClick={() => {
            setPage(page + 1);
          }}
          sx={{
            backgroundColor: "#dddddd",
            color: "#212121",
            borderColor: "#212121",
            "&:hover": {
              backgroundColor: "#bbbbbb",
              color: "#212121",
              borderColor: "#212121",
            },
            marginLeft: 1,
          }}
        >
          <ArrowForwardSharpIcon fontSize="small" />
        </Button>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  table: {
    marginTop: 20,
    backgroundColor: "#dddddd",
    maxWidth: "95vw",
    border: "2px ",
  },
  container: {
    justifyContent: "center",
    marginBottom: 40,
    width: "95vw",
  },
  TableFooter: {
    backgroundColor: "#dddddd",
    justifyContent: "center",
    display: "flex",
    overflow: "auto",
  },
}));
export default BitcoinTable;
