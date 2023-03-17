import React, { useState } from "react";
import { Base64 } from "js-base64";
import "../../Admin/Design/Home.css";
import "../../Admin/Design/AddHostel.css";
import "../../Admin/Design/Register.css";
import RegLogo from "../../assets/regimage.jpg";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Button, Slide, Snackbar, TextField } from "@mui/material";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import FormsApi from "../../api/api";

const RegisterHostelOwners = () => {
  const [apiEmailUsed, setApiEmailUsed] = useState(false);
  const [apiFeedBackError, setApiFeedBackError] = useState(false);
  const [state, setState] = useState({
    mui: {
      snackBarPosition: { vertical: "top", horizontal: "right" },
    },
  });

  const form_submit = async (e) => {
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
    const fd = new FormData(e.target);
    let form_content = {};
    fd.forEach((value, key) => {
      form_content[key] = value;
    });
    let api = new FormsApi();
    let res = await api.post("/newlandlord", form_content);
    if (res.data === "email already exists") {
      setApiEmailUsed(true);
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
    } else if (res.status === false) {
      setApiFeedBackError(true);
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
          snackBarMessage: res.data,
          snackBarStatus: "success",
          snackBarOpen: true,
        },
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };
  //close snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState({
      ...state,
      mui: { ...state.mui, snackBarMessage: "", snackBarOpen: false },
    });
  };

  //alert for material ui
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

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
      <SideBar active="reghostelowners" />
      <div className="main_ctr">
        <Header />
        <main>
          <h2 style={{ textAlign: "center", color: "#444" }}>
            Register A New Hostel Owner
          </h2>
          <div className="registerform card">
            <div className="description">
              <img
                className="reglogo"
                src={RegLogo}
                style={{
                  height: "7.5cm",
                  marginLeft: "130px",
                  marginTop: "30px",
                  width: "10cm",
                }}
                alt=""
              />
              <h2
                style={{
                  textAlign: "center",
                  padding: "30px",
                  fontWeight: "200",
                  color: "#444444",
                }}
              >
                Hello here! <br /> The admin registers hostel owners and sends
                them their email and password for loging in to add and manage
                their hostels. The password can later be changed for security
                perposes
              </h2>
            </div>
            <div className="form">
              <h2 style={{ textAlign: "center", color: "blue" }}>
                Register Hostel Owner
              </h2>
              <div
                className="Registerhostelowner"
                style={{
                  border: "1px solid rgb(203, 195, 195) ",
                  // backgroundColor: " rgb(250, 247, 247)",
                }}
              >
                <form onSubmit={form_submit}>
                  <div>
                    <TextField
                      className="reg-textfield"
                      color="primary"
                      label="Name"
                      style={{ width: "60%", margin: "30px 0px 0px 80px" }}
                      variant="outlined"
                      name="name"
                      type="text"
                    />
                  </div>
                  <div>
                    <TextField
                      className="reg-textfield"
                      color="primary"
                      label="Hostel"
                      style={{ width: "60%", margin: "30px 0px 0px 80px" }}
                      variant="outlined"
                      name="hostel"
                      type="text"
                    />
                  </div>
                  <div>
                    <TextField
                      className="reg-textfield"
                      color="primary"
                      label="Email"
                      style={{ width: "60%", margin: "30px 0px 0px 80px" }}
                      variant="outlined"
                      name="email"
                      type="email"
                      error={apiEmailUsed ? true : false}
                      helperText={
                        apiEmailUsed ? "This Email is already used" : ""
                      }
                    />
                  </div>
                  <div>
                    <TextField
                      className="reg-textfield"
                      color="primary"
                      label="TelphoneNumber"
                      style={{ width: "60%", margin: "30px 0px 0px 80px" }}
                      variant="outlined"
                      name="phone_number"
                      type="number"
                    />
                  </div>
                  <div>
                    <TextField
                      className="reg-textfield"
                      color="primary"
                      label="One time Password"
                      style={{ width: "60%", margin: "30px 0px 0px 80px" }}
                      variant="outlined"
                      name="password"
                      type="text"
                    />
                  </div>
                  <Button
                    variant="contained"
                    type="submit"
                    color="success"
                    style={{ width: "50%", margin: "15px 0px 10px 15%" }}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default RegisterHostelOwners;
