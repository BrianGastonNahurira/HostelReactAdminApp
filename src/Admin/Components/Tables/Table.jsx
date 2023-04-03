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
  Button,
} from "@mui/material";
import { async } from "@firebase/util";
// import FormsApi from "../../../api/api";
// import "../Statemets/statements.css";

export const StateTable = () => {
  const [state, setState] = useState({
    allbookings: [],
  });
  const [request, setRequest] = useState({
    landlordRequests: [],
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

      const response = await new FormsApi().get("/alllandlordrequests");
      if (response === "Error") {
        console.log(response);
      } else {
        if (response.status) {
          let landlordRequests = [];
          response.result.forEach((l) => {
            landlordRequests.push(l);
          });
          setRequest({ ...request, landlordRequests });
        }
      }
    })();
  }, []);

  const deleteBooking = async (id, e) => {
    const res = await new FormsApi().deleteItem(`/delete/book/${id}`);
    if (res.status) {
      alert("Confirm delete");
      window.location.reload();
    } else {
      alert("Un expected error");
    }
  };

  return (
    <>
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
              <TableCell
                style={{
                  color: "blue",
                  fontWeight: "bolder",
                  fontSize: "1rem",
                }}
                align="center"
              >
                Payment status
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
            {state.allbookings.map((row, i) => (
              <TableRow
                key={i.id}
                sx={{ "&:last-child td, &last-child th": { border: 0 } }}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.name_of_hostel}</TableCell>
                <TableCell align="center">{row.room_number}</TableCell>
                <TableCell align="center">{row.booking_date}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color={row.book_status ? "primary" : "secondary"}
                    onClick={async () => {
                      if (row.book_status) return;
                      let formsApi = new FormsApi();
                      let res = await formsApi.put(`/change/true/${row.id}`);

                      if (res === "Error") {
                        alert("Un expected error");
                        window.location.reload();
                      } else if (res.status === false) {
                        alert("Error again");
                        window.location.reload();
                      } else {
                        alert("payment made");
                        window.location.reload();
                      }
                    }}
                  >
                    {row.book_status ? "paid" : "pending"}
                  </Button>
                </TableCell>

                <TableCell align="center">
                  <Button onClick={(e) => deleteBooking(row.id, e)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div>
        <h2 style={{ textAlign: "center", color: "gray", margin: "10px 0px" }}>
          Landlord requests
        </h2>

        <TableContainer component={Paper} sx={{ maxHeight: "437px" }}>
          <Table aria-aria-label="simple table" stickyHeader>
            <TableHead>
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
                  Email
                </TableCell>
                <TableCell
                  style={{
                    color: "blue",
                    fontWeight: "bolder",
                    fontSize: "1rem",
                  }}
                >
                  Number
                </TableCell>
              </TableRow>
            </TableHead>
            {request.landlordRequests.length === 0 ? (
              <div>
                <p>No landlord requests to display........</p>
              </div>
            ) : (
              request.landlordRequests.map((v, i) => {
                return (
                  <TableBody>
                    <TableRow
                      key={i}
                      sx={{ "&:last-child td, &last-child th": { border: 0 } }}
                    >
                      <TableCell>{v.name}</TableCell>
                      <TableCell>{v.email}</TableCell>
                      <TableCell>0{v.phone}</TableCell>
                    </TableRow>
                  </TableBody>
                );
              })
            )}
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
