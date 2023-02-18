import React, { useEffect, useState } from "react";
import axios from "axios";
import FormsApi from "../../../api/api";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { async } from "@firebase/util";
// import "../Statemets/statements.css";

export const StateTable = () => {
  const [state, setState] = useState({
    allbookings: [],
  });

  useEffect(() => {
    (async () => {
      const res = await new FormsApi().get("/allbookings");
      if (res === "Error") {
        console.log(res);
      } else {
        if (res.status) {
          let allbookings = [];
          res.result.forEach((l) => {
            allbookings.push(l);
          });
          setState({ ...state, allbookings });
        }
      }
    })();
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
          {state.allbookings.map((row) => (
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
