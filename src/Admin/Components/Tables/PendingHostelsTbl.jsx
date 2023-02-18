import React from "react";
import FormsApi from "../../../api/api";
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
import { async } from "@firebase/util";

export const PendingTbl = () => {
  const [state, setState] = useState({
    pendinghostels: [],
  });
  console.log(state);

  useEffect(() => {
    (async () => {
      const res = await new FormsApi().get("/pendinghostels");
      if (res === "Error") {
        console.log(res);
      } else {
        if (res.status) {
          let pendinghostels = [];
          res.result.forEach((l) => {
            pendinghostels.push(i);
          });
          setState({ ...state, pendinghostels });
        }
      }
    })();
  });

  const postDelete = (id, e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5051/api/v6/deletehostel/${id}`)
      .then((res) => alert("Hostel Deleted"))
      .catch((err) => console.log(err));
    // new FormsApi().delete(`/deletehostel/${id}`);
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
          {state.pendinghostels.map((row) => (
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
                  onClick={() => navigate("/hostel/:id", { replace: row.id })}
                >
                  EDIT
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
