import React from "react";
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

export const PendingTbl = () => {
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
          {tableData.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ "&:last-child td, &last-child th": { border: 0 } }}
            >
              <TableCell>{row.Name}</TableCell>
              <TableCell>{row.Hostel}</TableCell>
              <TableCell align="center">
                <h4 style={{ color: "brown" }}>EDIT</h4>
              </TableCell>
              <TableCell align="center">
                <h4 style={{ color: "green" }}>CONFIRM</h4>
              </TableCell>
              <TableCell align="center">
                <h4 style={{ color: "red" }}>DELETE</h4>
              </TableCell>
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
