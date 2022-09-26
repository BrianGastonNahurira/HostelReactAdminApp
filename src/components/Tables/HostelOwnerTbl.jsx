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

export const HostelOwnerTbl = () => {
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
          {tableData.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ "&:last-child td, &last-child th": { border: 0 } }}
            >
              <TableCell>{row.Name}</TableCell>
              <TableCell align="right"> {row.Hostel} </TableCell>
              <TableCell align="right">{row.Tel}</TableCell>
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
