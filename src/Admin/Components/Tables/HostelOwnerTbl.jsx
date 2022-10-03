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

const url = "http://localhost:5051/api/v6/allOwners";

export const HostelOwnerTbl = () => {
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
              Name
            </TableCell>
            <TableCell
              style={{
                color: "blue",
                textAlign: "right",
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
                textAlign: "right",
                fontSize: "1rem",
              }}
            >
              Telephone number
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
              <TableCell align="right"> {row.hostel} </TableCell>
              <TableCell align="right">{row.phone_number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const tableData = [
  {
    Name: "Nahurira Gaston",
    Hostel: "Northern Elite",
    BookingFee: "20000",
    Tel: "0787277525",
  },
  {
    Name: "Aggi Peter",
    Hostel: "Mandera",
    BookingFee: "15000",
    Tel: "0778089708",
  },
  {
    Name: "Nahurira Gaston",
    Hostel: "Northern Elite",
    BookingFee: "1000",
    Tel: "0787277525",
  },
  {
    Name: "Aggi Peter",
    Hostel: "Mandera",
    BookingFee: "10000",
    Tel: "0778089708",
  },
  {
    Name: "Nahurira Gaston",
    Hostel: "Northern Elite",
    BookingFee: "20000",
    Tel: "0787277525",
  },
  {
    Name: "Aggi Peter",
    Hostel: "Mandera",
    BookingFee: "15000",
    Tel: "0778089708",
  },
  {
    Name: "Nahurira Gaston",
    Hostel: "Northern Elite",
    BookingFee: "1000",
    Tel: "0787277525",
  },
  {
    Name: "Aggi Peter",
    Hostel: "Mandera",
    BookingFee: "10000",
    Tel: "0778089708",
  },
  {
    Name: "Nahurira Gaston",
    Hostel: "Northern Elite",
    BookingFee: "20000",
    Tel: "0787277525",
  },
  {
    Name: "Aggi Peter",
    Hostel: "Mandera",
    BookingFee: "15000",
    Tel: "0778089708",
  },
  {
    Name: "Nahurira Gaston",
    Hostel: "Northern Elite",
    BookingFee: "1000",
    Tel: "0787277525",
  },
  {
    Name: "Aggi Peter",
    Hostel: "Mandera",
    BookingFee: "10000",
    Tel: "0778089708",
  },
];
