import React from "react";
import "../../Admin/Design/Home.css";
import "../../Admin/Design/AddHostel.css";
import "../../Admin/Design/Register.css";
import Logo from "../../Admin/Drawables/kanlytelogo.png";
// import Logo from "../../components/Drawables/beaconLogo.jpeg";
import { Button, TextField } from "@mui/material";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";

const RegisterHostelOwners = () => {
  return (
    <>
      <input type="checkbox" id="nav-toggle" defaultChecked />
      <SideBar active = "reghostelowners" />
      <div className="main_ctr">
          <Header />
        <main>
          <h2 style={{ textAlign: "center", color: "gray" }}>
            Register A New Hostel Owner
          </h2>
          <div className="registerform card">
            <div className="description">
              <img
                src={Logo}
                style={{
                  height: "7cm",
                  marginLeft: "130px",
                  marginTop: "30px",
                  width: "8cm",
                }}
                alt=""
              />
              <h2
                style={{
                  textAlign: "center",
                  padding: "30px",
                  fontWeight: "200",
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
                    name="hostel_des"
                    type="email"
                  />
                </div>
                <div>
                  <TextField
                    className="reg-textfield"
                    color="primary"
                    label="TelphoneNumber"
                    style={{ width: "60%", margin: "30px 0px 0px 80px" }}
                    variant="outlined"
                    name="hostel_des"
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
                  className="submit-btn"
                  variant="contained"
                  style={{
                    padding: "5px 25px 5px 25px",
                    margin: "30px 0px 30px 180px",
                  }}
                >
                  SUBMIT
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default RegisterHostelOwners;
