import React from "react";
import "../../Admin/Design/Home.css";
// import FormsApi from "../../api/api";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import { HostelTable } from "../Components/Tables/HostelTbl";
import { useEffect, useState } from "react";
import FormsApi from "../../api/api";
import { Link } from "react-router-dom";
import { Alert as MuiAlert, Slide, Button, Snackbar } from "@mui/material";
//alert for material ui
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default () => {
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

  //close snackBar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState({
      ...state,
      mui: { ...state.mui, snackBarMessage: "", snackBarOpen: false },
    });
  };
  return (
    <>
      <Snackbar
        open={state.mui.snackBarOpen}
        anchorOrigin={state.mui.snackBarPosition}
        autoHideDuration={4500}
        onClose={handleClose}
        message={state.mui.snackBarMessage}
        TransitionComponent={(props) => <Slide {...props} direction="down" />}
      >
        <Alert
          onClose={handleClose}
          severity={state.mui.snackBarStatus}
          sx={{ width: "100%" }}
        >
          {state.mui.snackBarMessage}
        </Alert>
      </Snackbar>
      <input type="checkbox" id="nav-toggle" defaultChecked />
      <SideBar active="bookings" />
      <div className="main_ctr">
        <Header />
        <main>
          <div className="table_card_ctr">
            <div className="recent_project_ctr">
              <div className="card">
                <div className="card_header">
                  <h3>All Hostels</h3>
                </div>
                <div className="card-body">
                  <table width="100%">
                    <thead>
                      <tr>
                        <td>Hostel name</td>
                        <td>Telephone Number</td>
                        <td>Actions</td>
                      </tr>
                    </thead>
                    <tbody>
                      {state.confirmedhostel.length === 0 ? (
                        <tr>
                          <td>No bookings to display...</td>
                        </tr>
                      ) : (
                        state.confirmedhostel.map((v, i) => {
                          return (
                            <tr key={i}>
                              <td>{v.hostel_name}</td>
                              <td>{v.telphone_number}</td>
                              <td>
                                <Link to={`/onehostel/${v.id}`}>
                                  <Button>Edit</Button>
                                </Link>
                              </td>
                              <td>
                                <Button
                                  onClick={(e) => handleDeleteProperty(v.id, e)}
                                >
                                  Delete
                                </Button>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
