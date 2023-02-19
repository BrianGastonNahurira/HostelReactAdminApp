import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
// import "../Statemets/statements.css";

const url = "http://localhost:5055/api/v6/allbookings";
export const StateTable = () => {
  const [state, setState] = useState([]);
  // console.log(state);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setState(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <TableContainer component={Paper} sx={{ maxHeight: "437px" }}>
      <Table aria-aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow></TableRow>
          <TableRow>
            <TableCell
              style={{
                color: "blue",
                fontWeight: "bolder",
                fontSize: "1rem",
              }}
            >
              Name
            </TableCell>
            <TableCell
              style={{
                color: "blue",
                fontWeight: "bolder",
                fontSize: "1rem",
              }}
            >
              Hostel
            </TableCell>
            <TableCell
              style={{
                color: "blue",
                fontWeight: "bolder",
                textAlign: "center",
                fontSize: "1rem",
              }}
            >
              Room Number
            </TableCell>
            <TableCell
              style={{
                color: "blue",
                fontWeight: "bolder",
                fontSize: "1rem",
              }}
              align="center"
            >
              Level
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &last-child th": { border: 0 } }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.name_of_hostel}</TableCell>
              <TableCell align="center">{row.room_number}</TableCell>
              <TableCell align="center">{row.level}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
