import React from "react";
import "../Login/login.css";
import Logo from "..//../assets/kanlytelogo.png";
import { Button, CircularProgress, TextField } from "@mui/material";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="m-ctr">
      <div className="ctr">
        <img
          alt="Hostel"
          src={Logo}
          height="120px"
          width="150px"
          style={{  }}
        />
        <div
          className="header-txt"
          style={{
            // margin: "15px 0px",
          }}
        >
          Beacon Hostels
        </div>
        <div className="loginCtr">
          <TextField
            name="email"
            label="Email"
            // helperText={!user._cp ? "Incorrect Username Or Password" : ""}
            // error={!user._cp}
            onChange={(e) => {
              // setUser({ ...user, username: e.target.value });
            }}
            fullWidth
            required
            style={{
              width: "250px",
              display: "block",
              margin: "15px 0px",
            }}
          />
          <TextField
            type="password"
            name="password"
            // helperText={!user._cp ? "Incorrect Username Or Password" : ""}
            label="Password"
            required
            // error={!user._cp}
            onChange={(e) => {
              // setUser({ ...user, password: e.target.value });
            }}
            fullWidth
            style={{
              display: "block",
              margin: "50px 0px",
            }}
          />
        </div>
        <div className="submitCtr">
          <Button
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginRight: 10,width:"15rem"}}
            // onClick={handleClick}
          >
            Login
            <span style={{ fontSize: "18.5px", marginLeft: "10px" }}>
              <i className="las la-sign-in-alt"></i>
            </span>
          </Button>
        </div>
      
      </div>
      <div className="text-ctr">
          <div>Hello here!</div>
         <div>Welcome to the Beacon Hostel management System.</div>
         <div>  We Manage hostels sorrounding the university, Help Students  get
          rooms, and work with online systems to help them deliver orders to
          students in their respective homes</div>
      <div>Don't have an account? Contact Admin for an account by clicking below</div>
            <div>
              <Link to="/">
                <Button variant="contained" color="success">
                  Contact Admin
                  <span style={{ fontSize: "18.5px", marginLeft: "10px" }}>
                  <i className="las la-phone-alt"></i>
                  </span>
                </Button>
              </Link>
            </div>
      </div>
    </div>
    </>
  );
};
export default Login;
