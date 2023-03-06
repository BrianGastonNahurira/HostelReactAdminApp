import React, { useEffect, useState } from "react";
import {
  Alert as MuiAlert,
  Slide,
  Button,
  Snackbar,
  TextField,
} from "@mui/material";
import Header from "../../../HostelOwner/Components/Topbar/Header";
import Sidebar from "../../../HostelOwner/Components/sidebar/Sidebar";
import "../designs/profile.css";
import user from "../../../app.config";
import FormsApi from "../../../api/api";
//alert for material ui
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const LandLordProfile = () => {
  console.log(user);
  const [state, setState] = useState({
    landlord: {},
    mui: { snackBarPosition: { vertical: "top", horizontal: "right" } },
  });
  useEffect(() => {
    (async () => {
      let res = await new FormsApi().get("/owner/one/" + user.id);
      if (res !== "Error") {
        if (res.status !== false) {
          setState({
            ...state,
            landlord: res.result || {},
          });
        }
      }
    })();

    return () => {
      setState({
        landlord: {},
        mui: {
          snackBarOpen: false,
          snackBarMessage: "",
          snackBarStatus: "info",
          snackBarPosition: { vertical: "top", horizontal: "right" },
        },
      });
    };
  }, []);

  const editLandlord = async (e) => {
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
    let formDataInstance = new FormData(e.target);
    let form_contents = {};
    formDataInstance.forEach((el, i) => {
      form_contents[i] = el;
    });
    let res = await new FormsApi().put(`/resetowmer/${user.id}`, form_contents);
    if (res !== "Error") {
      if (res.status !== false) {
        setState({
          ...state,
          mui: {
            ...state.mui,
            snackBarMessage: "Landlord Updated Successfully....",
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
            snackBarMessage: "Editting Landlord Failed, Server Error....",
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
          snackBarMessage: "Editting landlord Failed, Check your internet....",
          snackBarStatus: "warning",
          snackBarOpen: true,
        },
      });
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

      <Sidebar active="home" />
      <div className="main_ctr">
      <Header />
      <main>
      <div className="__profile__">
        <div className="profile">
          <div className="showprofile">
            <h2>My Profile</h2>
            <p>
              <span>Username: &nbsp; &nbsp; &nbsp;</span>
              {state.landlord.name}
            </p>
            <p>
              <span>Email: &nbsp; &nbsp; &nbsp;</span>
              {state.landlord.email}
            </p>
            <p>
              <span>Phone Number: &nbsp; &nbsp; &nbsp;</span>0
              {state.landlord.phone_number}
            </p>
          </div>
          <div className="editprofile">
            <h2>Edit Profile</h2>
            <form onSubmit={editLandlord} autoComplete="off">
              <div>
                <TextField
                  id="outlined-basic"
                  label="User name"
                  name="name"
                  color="primary"
                  variant="filled"
                  style={{ width: "100%" }}
                  value={state.landlord.name}
                  onChange={(e) => {
                    setState({
                      ...state,
                      landlord: {
                        ...state.landlord,
                        name: e.target.value,
                      },
                    });
                  }}

                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="email"
                  name="email"
                  color="primary"
                  variant="filled"
                  style={{ width: "100%" }}
                  value={state.landlord.email}
                  onChange={(e) => {
                    setState({
                      ...state,
                      landlord: {
                        ...state.landlord,
                        email: e.target.value,
                      },
                    });
                  }}

                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="phone_number"
                  color="primary"
                  variant="filled"
                  name="phone_number"
                  style={{ width: "100%" }}
                  value={state.landlord.phone_number}
                  onChange={(e) => {
                    setState({
                      ...state,
                      landlord: {
                        ...state.landlord,
                        phone_number: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="password"
                  type="password"
                  name="password"
                  variant="filled"
                  style={{ width: "100%" }}
                  value={state.landlord.password}
                  onChange={(e) => {
                    setState({
                      ...state,
                      landlord: {
                        ...state.landlord,
                        password: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <div>
                <Button variant="contained" type="submit">Confirm changes</Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};
