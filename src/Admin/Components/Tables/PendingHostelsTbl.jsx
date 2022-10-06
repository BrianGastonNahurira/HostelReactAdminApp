import React from "react";

import { useNavigate } from "react-router-dom";
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
import { Button } from "@mui/material";

import { useEffect, useState } from "react";
import axios from "axios";

const url = "http://localhost:5051/api/v6/pendinghostel";

export const PendingTbl = () => {
  const [state, setState] = useState([]);
  console.log(state);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log("wjqwh");
        setState(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const postDelete = (id, e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5051/api/v6/deletehostel/${id}`)
      .then((res) => alert("Hostel Deleted"))
      .catch((err) => console.log(err));
  };

  const navigate = useNavigate();

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
              Name
            </TableCell>
            {/* <TableCell
              style={{
                color: "blue",
                fontWeight: "bolder",
                fontSize: "1rem",
              }}
            >
              Hostel
            </TableCell> */}
            <TableCell
              style={{
                color: "blue",
                fontWeight: "bolder",
                textAlign: "center",
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
              align="center"
            >
              Confirm
            </TableCell>
            <TableCell
              style={{
                color: "blue",
                fontWeight: "bolder",
                fontSize: "1rem",
              }}
              align="center"
            >
              Delete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &last-child th": { border: 0 } }}
            >
              <TableCell>{row.hostel_name}</TableCell>
              {/* <TableCell>{row.hostel}</TableCell> */}
              <TableCell align="center">
                <h4 style={{ color: "brown" }}>EDIT</h4>
              </TableCell>
              <TableCell align="center">
                <Button
                  style={{ color: "green" }}
                  onClick={() => navigate("/addhostel", { replace: row.id })}
                >
                  EDIT T
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button
                  style={{ color: "red" }}
                  onClick={(e) => postDelete(row.id, e)}
                >
                  DELETE
                </Button>
                {/* <h4 style={{ color: "red" }} variant="contained">
                  DELETE
                </h4> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
