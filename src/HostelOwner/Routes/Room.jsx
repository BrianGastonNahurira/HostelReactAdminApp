import React, { useState, useEffect } from "react";
import {
  Alert as MuiAlert,
  Slide,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import { UploadSingle } from "../../api/files";
import ".//designs/room.css";
import Sidebar from "../Components/sidebar/Sidebar";
import Header from "../Components/Topbar/Header";
import user from "../../app.config";
import FormsApi from "../../api/api";
import { Link } from "react-router-dom";

  //alert for material ui
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default () => {
  const [state, setState] = useState({
    rooms: [],
    hostels: [],
    selected_hostel: "",
    active_room: "",
    mui: { snackBarPosition: { vertical: "top", horizontal: "right" } },
  });

  useEffect(() => {
    (async () => {
      const hostels = await new FormsApi().get("/hostels/" + user.id);
      if (hostels !== "Error") {
        if (hostels.status !== false) {
          setState({
            ...state,
            hostels: hostels.result,
          });
        }
      }
    })();
  }, []);


  const changeSelectHostel = (event) => {
    setState({ ...state, selected_hostel: event.target.value });
  };

  const form_submit_room = async (e) => {
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

    let fd = new FormData(e.target);
    let form_Obj = {};
    fd.forEach((v, i) => {
      form_Obj[i] = v;
    });
    let formsApi = new FormsApi();
    let res = await formsApi.post("/addroom", form_Obj);
    if (res === "Error") {
      setState({
        ...state,
        mui: {
          ...state.mui,
          snackBarMessage: "Some Network error",
          snackBarStatus: "warning",
          snackBarOpen: true,
        },
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else if (res.status === false) {
      setState({
        ...state,
        mui: {
          ...state.mui,
          snackBarMessage: res.data,
          snackBarStatus: "warning",
          snackBarOpen: true,
        },
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      setState({
        ...state,
        mui: {
          ...state.mui,
          snackBarMessage: "Room Added",
          snackBarStatus: "success",
          snackBarOpen: true,
        },
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
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

const hostel_n = state.hostels.filter((l)=>{
  return state.selected_hostel === l.id;
  });
 const p = hostel_n.map((v, r)=>{
  return v.hostel_name;
})

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
      <Sidebar active="home" />
      <div className="main_ctr">
        <Header />
        <main>
        <div className="__backhme">
            <Link to="/">
              <Button variant="contained" color="primary">
                Back
              </Button>
            </Link>
          </div>
          <div className="manage-comp-ctr">
            <div style={{ marginBlock: 10 }}>New Room</div>
            <form className="room-ctr-fields" onSubmit={form_submit_room}>
              <input type="text" name="landlord_id" value={user.id} hidden />
              <input
                type="text"
                name="hostel_name"
                value={p}
                hidden
                onChange={() => {}}
                    />
              <div className="room-inputs-ctr-divided">
                <FormControl style={{ width: "48%" }}>
                  <InputLabel id="select-hostel-label">
                    Select Hostel
                  </InputLabel>
                  <Select
                    labelId="select-hostel-label"
                    value={state.selected_hostel}
                    label="Select Hostel"
                    onChange={changeSelectHostel}
                    name="hostel_id"
                    required
                  >
                    {state.hostels.length === 0 ? (
                      <MenuItem value="">No Hostels</MenuItem>
                    ) : (
                      state.hostels.map((v, i) => (
                        <MenuItem key={i} value={v.id}>
                          {v.hostel_name}
                        </MenuItem>
                      ))
                    )}
                  </Select>
                </FormControl>
                <FormControl style={{ width: "48%" }}>
                  <InputLabel id="select-room-type-label">
                    Select Room Type
                  </InputLabel>
                  <Select
                    labelId="select-room-type-label"
                    label="Select Room Type"
                    name="room_type"
                    required
                  >
                    <MenuItem value="Single">Single</MenuItem>
                    <MenuItem value="Double">Double</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="register-inputs-ctr-half-width">
                <TextField
                  label="Room Description"
                  name="room_description"
                  variant="outlined"
                  color="primary"
                  style={{ width: "100%", margin: "10px 0px" }}
                />
              </div>
              <div className="room-inputs-ctr-divided">
                <TextField
                  label="Room Number"
                  name="room_number"
                  variant="outlined"
                  color="primary"
                  style={{ width: "48%" }}
                />
                <TextField
                  label="Room Fee(UGX)"
                  name="room_fee"
                  variant="outlined"
                  color="primary"
                  style={{ width: "48%" }}
                />
              </div>
              <div>
                <Button variant="outlined" color="primary" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};
