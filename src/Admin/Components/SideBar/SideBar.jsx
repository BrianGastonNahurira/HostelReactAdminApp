import React from "react";
import "../SideBar/SideBar.css";
// import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import GiteIcon from "@mui/icons-material/Gite";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PendingIcon from "@mui/icons-material/Pending";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import { Link } from "@mui/material";
// import Logo from "../Drawables/beaconLogo.jpeg";

const SideBar = () => {
  return (
    <div className="sidebar card">
      <div style={{ marginTop: "10vh" }}>
        <img src="" style={{ height: "3cm", width: "4.1cm" }} alt="" />
      </div>
      <Link href="/home" style={{ color: "gray", textDecoration: "none" }}>
        <div className="icons">
          <AddHomeWorkIcon />
          <p>Home</p>
        </div>
      </Link>
      <Link href="/addhostel" style={{ color: "gray", textDecoration: "none" }}>
        <div className="icons">
          <AddHomeWorkIcon />
          <p>AddHostel</p>
        </div>
      </Link>
      <Link href="/hostels" style={{ color: "gray", textDecoration: "none" }}>
        <div className="icons">
          <GiteIcon />
          <p>Hostels</p>
        </div>
      </Link>
      <Link
        href="/hostelowners"
        style={{ color: "gray", textDecoration: "none" }}
      >
        <div className="icons">
          <PeopleAltIcon />
          <p>Hostel Owners</p>
        </div>
      </Link>
      <Link href="/bookings" style={{ color: "gray", textDecoration: "none" }}>
        <div className="icons">
          <ShoppingCartIcon />
          <p>Bookings</p>
        </div>
      </Link>
      <Link
        href="/pendinghostels"
        style={{ color: "gray", textDecoration: "none" }}
      >
        <div className="icons">
          <PendingIcon />
          <p>Pending Hostels</p>
        </div>
      </Link>
      <Link
        href="/reghostelowner"
        style={{ color: "gray", textDecoration: "none" }}
      >
        <div className="icons">
          <PeopleAltIcon />
          <p>Register Hostel Owner</p>
        </div>
      </Link>
    </div>
  );
};
export default SideBar;
