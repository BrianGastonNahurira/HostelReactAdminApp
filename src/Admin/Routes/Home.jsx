import React from "react";
import "../Design/Home.css";
import { StateTable } from "../Components/Tables/Table";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";

const Home = () => {
  return (
    <>
      <section className="home-page">
        <div className="home-header">
          <Header />
        </div>
        <div className="home-sidebar">
          <SideBar />
        </div>
        <div className="home-body">
          <div className="home-cards ">
            <div className="dashboard-cards">
              <div className="dashboard-card bb">
                <span style={{ color: "gray" }}>
                  <i className="las la-users"></i>
                </span>
                <div className="">
                  <div>Hostel Owners</div>
                  <div style={{ color: "gray" }}>20</div>
                </div>
              </div>
              <div className="dashboard-card bb">
                <span style={{ color: "gray" }}>
                  <i className="las la-home"></i>
                </span>
                <div className="">
                  <div>Total Hostels</div>
                  <div style={{ color: "gray" }}>20</div>
                </div>
              </div>
              <div className="dashboard-card">
                <span style={{ color: "gray" }}>
                  <i className="las la-users-cog"></i>
                </span>
                <div className="">
                  <div>Bookings</div>
                  <div style={{ color: "gray" }}>89</div>
                </div>
              </div>
              <div className="dashboard-card">
                <span style={{ color: "gray" }}>
                  <i className="las la-restroom"></i>
                </span>
                <div className="">
                  <div>Total No of rooms</div>
                  <div style={{ color: "gray" }}>60</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ paddingLeft: "10px" }}>
            <h2 style={{ textAlign: "center", color: "gray" }}>
              RECENT BOOKINGS
            </h2>
            <StateTable />
            <p
              style={{ textAlign: "center", color: "blue" }}
              className="copyright"
            >
              copyrights reserved @kanlyteug 2022
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;