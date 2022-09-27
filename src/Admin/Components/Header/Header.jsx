import React from "react";
// import "../Drawables/passport.jpeg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../Header/Header.css";
import ReorderIcon from "@mui/icons-material/Reorder";

const Header = () => {
  return (
    <div className="header-ctr card">
      <div className="beaconLogo" style={{ marginLeft: "5px" }}>
        <div className="div-bar">
          <ReorderIcon
            className="bars"
            fontSize="large"
            style={{
              color: "gray",
              padding: "10px",
              marginTop: "7px",
            }}
          />
        </div>
        <div className="beaconadminlogo">
          <h2>BeaconAdmin</h2>
        </div>
      </div>
      <div
        className="userdetails"
        style={{
          padding: "7px",
          marginTop: "8px",
          display: "flex",
          color: "gray",
          justifyContent: "center",
        }}
      >
        <AccountCircleIcon fontSize="large" style={{ marginTop: "0px" }} />
        <p>Gaston</p>
      </div>
    </div>
  );
};
export default Header;
