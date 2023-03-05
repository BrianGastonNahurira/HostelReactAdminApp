import React from "react";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  TextField,
} from "@mui/material";
import Header from "../../../HostelOwner/Components/Topbar/Header";
import Sidebar from "../../../HostelOwner/Components/sidebar/Sidebar";
import "../designs/profile.css";
import user from "../../../app.config";
export const LandLordProfile = () => {
  console.log(user);

  return (
    <>
      {/* console.log(user) */}
      <Header />
      <Sidebar />
      <div className="__profile__">
        <div className="profile">
          <div className="showprofile">
            <h2>My Profile</h2>
            <p>
              <span>Username: &nbsp; &nbsp; &nbsp;</span>
              {user.name}
            </p>
            <p>
              <span>Email: &nbsp; &nbsp; &nbsp;</span>
              {user.email}
            </p>
            <p>
              <span>Phone Number: &nbsp; &nbsp; &nbsp;</span>0
              {user.phone_number}
            </p>
          </div>
          <div className="editprofile">
            <h2>Edit Profile</h2>
            <form>
              <div>
                <TextField
                  id="outlined-basic"
                  label="User name"
                  variant="standard"
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="email"
                  variant="standard"
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="phone_number"
                  variant="standard"
                />
              </div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="password"
                  type="password"
                  variant="standard"
                />
              </div>
              <div>
                <Button variant="contained">Confirm changes</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
