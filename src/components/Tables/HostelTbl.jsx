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

export const HostelTable = () => {
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
          {tableData.map((row) => (
            <TableRow
              key={row.Hostel}
              sx={{ "&:last-child td, &last-child th": { border: 0 } }}
            >
              <TableCell>{row.Hostel}</TableCell>
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
