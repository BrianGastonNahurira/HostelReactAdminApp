import React from "react";
import "../Login/login.css";
import Logo from "../Drawables/beaconLogo.jpeg";
import { Button, TextField } from "@mui/material";

export const Login = () => {
  return (
    <>
      <div className="login  ">
        <div className="logininfo card">
          <div style={{ width: "100vh" }}>
            <img
              src={Logo}
              style={{ height: "7cm", marginLeft: "170px", width: "12cm" }}
              alt=""
            />
          </div>
          <div className="mylogin-demo">
            <p
              style={{
                textAlign: "center",
                padding: "0px 90px 0px 90px",
                fontSize: "x-large",
              }}
            >
              Hello here! <br /> Welcome to the Beacon Hostel management System.
              We Manage hostels sorrounding the university, Help Students get
              rooms, and work with online systems to help them deliver orders to
              students in their respective homes
            </p>
          </div>
        </div>
        <div className="loginform " style={{ border: "1px solid gray" }}>
          <div style={{backgroundColor:""}}>
            <TextField
              color="primary"
              label="Hostel"
              style={{ width: "60%", margin: "30px 0px 0px 80px" }}
              variant="outlined"
              name="hostel"
              type="text"
            />
          </div>
        </div>
      </div>
    </>
  );
};
