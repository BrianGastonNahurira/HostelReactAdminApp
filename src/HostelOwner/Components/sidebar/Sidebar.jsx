import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default (props) => {
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
            <Link to="/bookings">
              <span
                className={`${
                  props.active === "bookings" ? "active" : ""
                } _a_replaced`}
              >
                <span className="las la-eye"></span>
                <span>View Bookings</span>
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