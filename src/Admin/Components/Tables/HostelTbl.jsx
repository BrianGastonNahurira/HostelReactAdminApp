import React from "react";
import { ClearAll, Edit } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Link,
  Button,
  Snackbar,
  Slide,
} from "@mui/material";
// import "../Statemets/statements.css";

import { useEffect, useState } from "react";
import axios from "axios";
import FormsApi from "../../../api/api";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const HostelTable = () => {
  const [state, setState] = useState({
    confirmedhostel: [],
    mui: {
      SnackbarPosition: { vertical: "top", horizontal: "center" },
      SnackBarMessage: "please wait !",
      SnackBarOpen: false,
      SnackBarStatus: "info",
    },
  });
  useEffect(() => {
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

  const postDelete = (id, e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5055/api/v6/deletehostel/${id}`)
      .then((res) => alert("Hostel Deleted"))
      .catch((err) => console.log(err));
    // new FormsApi().delete(`/deletehostel/${id}`);
  };

  const handleDeleteProperty = async (id, e) => {
    const res = await new FormsApi().deleteItem(`/deletehostel/${id}`);
    if (res.status) {
      setState({
        ...state,
        mui: {
          ...state.mui,
          SnackBarMessage: "Hostel Deleted Successfully",
          SnackBarOpen: true,
          SnackBarStatus: "succes",
        },
      });
    } else {
      if (res === "Error") {
        setState({
          ...state,
          mui: {
            ...state.mui,
            SnackBarMessage: "An Error Occured",
            SnackBarOpen: true,
            SnackBarStatus: "warning",
          },
        });
      }
    }
  };
  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }

    // setState({ ...state, mui: snackbarClose(false) });
  };
  return (
    <>
      <Snackbar
        open={state.mui.SnackBarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={state.mui.SnackbarPosition}
        // TransitionComponent={(props) => <Slide {...props} direction="down" />}
      >
        <Alert
          onClose={handleClose}
          severity={state.mui.SnackBarStatus}
          sx={{ width: "100%" }}
        ></Alert>
        {state.mui.SnackBarMessage}
      </Snackbar>

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
            {state.confirmedhostel.map((v, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &last-child th": { border: 0 } }}
              >
                <TableCell>{v.hostel_name}</TableCell>
                <TableCell>
                  <Link to ={`addhostel/${v.id}`}>
                  <Button>Edit</Button>
                  </Link>
                </TableCell>
                <TableCell align="left">
                  <Button onClick={(e) => handleDeleteProperty(i.id, e)}>
                    {/* <DeleteIcon */}
                    {/* style={{ color: "red" }} */}
                    Delete
                    {/* /> */}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
