import React from "react";
import { ClearAll, Edit } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Link,
} from "@mui/material";
// import "../Statemets/statements.css";

import { useEffect, useState } from "react";
import axios from "axios";

const url = "http://localhost:5055/api/v6/confirmedhostel";

export const HostelTable = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setState(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <TableContainer component={Paper} sx={{ maxHeight: "500px" }}>
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
              Hostel Name
            </TableCell>
            <TableCell
              style={{
                color: "blue",
                fontWeight: "bolder",
                fontSize: "1rem",
              }}
            >
              Edit
            </TableCell>
            <TableCell
              style={{
                color: "blue",
                fontWeight: "bolder",
                fontSize: "1rem",
              }}
            >
              Delete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.map((i) => (
            <TableRow
              key={i.id}
              sx={{ "&:last-child td, &last-child th": { border: 0 } }}
            >
              <TableCell>{i.hostel_name}</TableCell>
              <TableCell>
                <Link href="/addhostel">
                  <EditIcon />
                </Link>
              </TableCell>
              <TableCell align="left">
                <DeleteIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
