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

export const StateTable = () => {
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
              BookingFee(Ugshs)
            </TableCell>
            <TableCell
              style={{
                color: "blue",
                fontWeight: "bolder",
                fontSize: "1rem",
              }}
              align="center"
            >
              Telphone No
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
              <TableCell align="center">{row.BookingFee}</TableCell>
              <TableCell align="center">{row.Tel}</TableCell>
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
