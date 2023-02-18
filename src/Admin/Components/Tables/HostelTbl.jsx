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
import FormsApi from "../../../api/api";

export const HostelTable = () => {
  const [state, setState] = useState({
    confirmedhostel: [],
  });

  useEffect(() => {
    // axios
    //   .get(url)
    //   .then((res) => {
    //     console.log(res);
    //     setState(res.data.result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    (async () => {
      const res = await new FormsApi().get("/confirmedhostel");
      if (res === "Error") {
        console.log(res);
      } else {
        if (res.status) {
          let confirmedhostel = [];
          res.result.forEach((i) => {
            confirmedhostel.push(i);
          });
          setState({ ...state, confirmedhostel });
        }
      }
    })();
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
          {state.confirmedhostel.map((i) => (
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
