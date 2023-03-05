import React, { useEffect, useState } from "react";
import {
  Button,
  Alert as MuiAlert,
  Slide,
  Menu,
  MenuItem,
  Snackbar,
  TextField,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import Sidebar from "../Components/sidebar/Sidebar";
import Header from "../Components/Topbar/Header";
import "./designs/home.css";
import FormsApi from "../../api/api";
import user from "../../app.config";
//alert for material ui
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Home = () => {
  const [state, setState] = useState({
    booked_rooms: [],
    available_rooms: [],
    AnchorEl: null,
    AnchorElRooms: null,
    open: false,
    dialog: false,
    message: "",
    mui: {
      snackBarOpen: false,
      snackBarMessage: "",
      snackBarStatus: "info",
      snackBarPosition: { vertical: "top", horizontal: "right" },
    },
  });
  //mui popup
  const closePopUp = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState({
      ...state,
      mui: {
        ...state.mui,
        open: false,
        message: "Please Wait...",
        messageState: "info",
      },
    });
  };
  const handleClose = () => {
    setState({
      ...state,
      dialog: false,
    });
  };

  const handleCloseActionsRooms = () => {
    setState({
      ...state,
      AnchorElRooms: null,
    });
  };
  const handleOpenActions = (e) => {
    setState({ ...state, AnchorEl: e.currentTarget });
  };
  const handleCloseActions = () => {
    setState({ ...state, AnchorEl: null });
  };
  const handleOpenActionsRooms = (e) => {
    setState({ ...state, AnchorElRooms: e.currentTarget });
  };
  useEffect(() => {
    (async () => {
      const res = await new FormsApi().get("/rooms/landlord/" + user.id);
      if (res === "Error") {
        console.log(res);
      } else {
        if (res.status) {
          let booked_rooms = [];
          let available_rooms = [];
          res.result.forEach((el) => {
            if (el.booked === true) {
              booked_rooms = [...booked_rooms, el];
            } else {
              available_rooms = [...available_rooms, el];
            }
          });
          setState({ ...state, available_rooms, booked_rooms });
        }
      }
    })();
  }, []);

  console.log(state.available_rooms);

  //change room status from true to false
  const changesStatustoFalse = async (id, e) => {
    e.preventDefault();
    setState({
      ...state,
      mui: {
        ...state.mui,
        snackBarMessage: "Please Wait....",
        snackBarStatus: "info",
        snackBarOpen: true,
      },
    });
    let res = await new FormsApi().put(`/room/false/${id}`);
    if (res !== "Error") {
      if (res.status !== false) {
        setState({
          ...state,
          mui: {
            ...state.mui,
            snackBarMessage: "Room Status Successfully....",
            snackBarStatus: "success",
            snackBarOpen: true,
          },
        });
        window.location.reload();
      } else {
        setState({
          ...state,
          mui: {
            ...state.mui,
            snackBarMessage: "Change Status Failed, Server Error....",
            snackBarStatus: "warning",
            snackBarOpen: true,
          },
        });
      }
    } else {
      setState({
        ...state,
        mui: {
          ...state.mui,
          snackBarMessage: "Change Status Failed, Check your internet....",
          snackBarStatus: "warning",
          snackBarOpen: true,
        },
      });
    }
  };

  //change room status from false to true
  const changesStatustoTrue = async (id, e) => {
    e.preventDefault();
    setState({
      ...state,
      mui: {
        ...state.mui,
        snackBarMessage: "Please Wait....",
        snackBarStatus: "info",
        snackBarOpen: true,
      },
    });
    let res = await new FormsApi().put(`/room/true/${id}`);
    if (res !== "Error") {
      if (res.status !== false) {
        setState({
          ...state,
          mui: {
            ...state.mui,
            snackBarMessage: "Room Status Successfully....",
            snackBarStatus: "success",
            snackBarOpen: true,
          },
        });
        window.location.reload();
      } else {
        setState({
          ...state,
          mui: {
            ...state.mui,
            snackBarMessage: "Change Status Failed, Server Error....",
            snackBarStatus: "warning",
            snackBarOpen: true,
          },
        });
      }
    } else {
      setState({
        ...state,
        mui: {
          ...state.mui,
          snackBarMessage: "Change Status Failed, Check your internet....",
          snackBarStatus: "warning",
          snackBarOpen: true,
        },
      });
    }
  };

  //close snackBar
  const handleClose1 = (event, reason) => {
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
        onClose={handleClose1}
        message={state.mui.snackBarMessage}
        TransitionComponent={(props) => <Slide {...props} direction="down" />}
      >
        <Alert
          onClose={handleClose1}
          severity={state.mui.snackBarStatus}
          sx={{ width: "100%" }}
        >
          {state.mui.snackBarMessage}
        </Alert>
      </Snackbar>
      <input type="checkbox" id="nav-toggle" defaultChecked />
      <Sidebar active="home" />
      <div className="main_ctr">
        <Header />
        <main>
          <div className="cards_ctr">
            <div className="single_card">
              <div className="">
                <h3>10</h3>
                <span>
                  Total Bookings <br />
                </span>
              </div>
              <div className="">
                <span className="las la-dolly-flatbed"> </span>
              </div>
            </div>
            <div className="single_card">
              <div className="">
                <h3>{`${state.available_rooms.length}`}</h3>
                <span>Free Rooms</span>
              </div>
              <div className="">
                <span className="las la-dolly-flatbed"></span>
              </div>
            </div>
            <div className="single_card">
              <div className="">
                <h3>{`${state.booked_rooms.length}`}</h3>
                <span>Occupied Rooms</span>
              </div>
              <div className="">
                <span className="las la-dolly-flatbed"> </span>
              </div>
            </div>
            <div className="single_card">
              <div className="">
                <h3>30%</h3>
                <span>Performance</span>
              </div>
              <div className="">
                <span className="las la-user-tag"> </span>
              </div>
            </div>
          </div>
          <div className="top_btns">
            <div>
              <h2>My Hostels</h2>
            </div>
            <div>
              <Link to="/hostels/new">
                <Button variant="contained" color="primary">
                  New Hostel
                </Button>
              </Link>
            </div>
          </div>
          <div className="rooms_grid">
            <div className="recent_project_ctr">
              <div className="card">
                <div className="card-header">
                  <h3>Available Rooms</h3>
                  {/* <div className="search__">
                    <TextField
                      name="name"
                      id="search__"
                      variant="outlined"
                      label="Search Room"
                      style={{
                        width: "20%",
                      }}
                    />
                  </div> */}
                  <Button
                    variant="contained"
                    color="primary"
                    aria-controls="room-actions"
                    aria-haspopup="true"
                    onClick={handleOpenActionsRooms}
                  >
                    Menu
                    <span style={{ fontSize: "17.5px", marginLeft: "10px" }}>
                      <span className="las la-angle-down"></span>
                    </span>
                  </Button>
                  <Menu
                    id="room-actions"
                    anchorEl={state.AnchorElRooms}
                    keepMounted
                    open={Boolean(state.AnchorElRooms)}
                    onClose={handleCloseActionsRooms}
                    disableScrollLock={true}
                  >
                    <Link to="/new-room">
                      <MenuItem onClick="">New Room</MenuItem>
                    </Link>
                  </Menu>
                </div>
                <div className="card-body">
                  <table width="100%">
                    <thead>
                      <tr>
                        <td>Number</td>
                        <td>Room Fee(UGX)</td>
                        <td>Room Type</td>
                        <td>Hostel</td>
                        <td>Edit</td>
                        <td>Status</td>
                      </tr>
                    </thead>
                    <tbody>
                      {state.available_rooms.length === 0 ? (
                        <tr>
                          <td>No rooms to display...</td>
                        </tr>
                      ) : (
                        state.available_rooms.map((v, i) => {
                          return (
                            <tr key={i}>
                              <td>{v.room_number}</td>
                              <td>{v.room_fee}</td>
                              <td>{v.room_type}</td>
                              <td>{v.hostel_name}</td>
                              <td>
                                <Link to={`/editroom/${v.id}`}>
                                  <Button>Edit</Button>
                                </Link>
                              </td>
                              <td>
                                <Button
                                  onClick={(ell) =>
                                    changesStatustoTrue(v.id, ell)
                                  }
                                >
                                  Free
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
            <div className="recent_project_ctr">
              <div className="card">
                <div className="card-header">
                  <h3>Booked Rooms</h3>
                </div>
                <div className="card-body">
                  <table width="100%">
                    <thead>
                      <tr>
                        <td>Number</td>
                        <td>Room Fee(UGX)</td>
                        <td>Room type</td>
                        <td>Hostel</td>
                        <td>Actions</td>
                      </tr>
                    </thead>
                    <tbody>
                      {state.booked_rooms.length === 0 ? (
                        <tr>
                          <td>No rooms to display...</td>
                        </tr>
                      ) : (
                        state.booked_rooms.map((v, i) => {
                          return (
                            <tr key={i}>
                              <td>{v.room_number}</td>
                              <td>{v.room_fee}</td>
                              <td>{v.room_type}</td>
                              <td>{v.hostel_name}</td>
                              <td>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={(ell) =>
                                    changesStatustoFalse(v.id, ell)
                                  }
                                >
                                  Remove
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
export default Home;
