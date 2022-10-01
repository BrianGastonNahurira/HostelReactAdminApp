import React from "react";
import { Link } from "react-router-dom";
import "../SideBar/SideBar.css";
const SideBar = (props) => {
  return (
    <>
     <div className="sideBar-ctr">
    <div className="sidebar">
      <label htmlFor="nav-toggle" className="close-on-sm">
        <span className="las la-times"></span>
      </label>
      <div className="sidebar-brand">
        <h2>
          <span className="lab la-accusoft"></span>
          <span>Hostels</span>
        </h2>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>
            <Link to="/">
              <span
                className={`${
                  props.active === "home" ? "active" : ""
                } _a_replaced`}
              >
                <span className="las la-home"></span>
                <span>Home</span>
              </span>
            </Link>
          </li>

          <li>
            <Link to="/addhostel">
              <span
                className={`${
                  props.active === "addhostel" ? "active" : ""
                } _a_replaced`}
              >
                <span className="las la-globe"></span>
                <span>Add Hostel</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/hostels">
              <span
                className={`${
                  props.active === "hostels" ? "active" : ""
                } _a_replaced`}
              >
                <span className="las la-globe"></span>
                <span>Hostels</span>
              </span>
            </Link>
            </li>
            <li>
            <Link to="/hostelowners">
              <span
                className={`${
                  props.active === "hostelowners" ? "active" : ""
                } _a_replaced`}
              >
                <span className="las la-globe"></span>
                <span>Hostels Owners</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/bookings">
              <span
                className={`${
                  props.active === "bookings" ? "active" : ""
                } _a_replaced`}
              >
                <span className="las la-globe"></span>
                <span>Bookings</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/pendinghostels">
              <span
                className={`${
                  props.active === "pendinghostels" ? "active" : ""
                } _a_replaced`}
              >
                <span className="las la-globe"></span>
                <span>Pending Hostels</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/reghostelowners">
              <span
                className={`${
                  props.active === "reghostelowners" ? "active" : ""
                } _a_replaced`}
              >
                <span className="las la-globe"></span>
                <span>Register Landlord</span>
              </span>
            </Link>
          </li>
          </ul>
          </div>
          </div>
          </div>
    </>
  );
};
export default SideBar;
