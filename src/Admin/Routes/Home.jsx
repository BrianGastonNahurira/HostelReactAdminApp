import React from "react";
import "../Design/Home.css";
import { StateTable } from "../Components/Tables/Table";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";

import { useEffect, useState } from "react";
import axios from "axios";
const url = "http://localhost:5055/api/v6/confirmedhostel";
const url1 = "http://localhost:5055/api/v6/allowners";
const url2 = "http://localhost:5055/api/v6/allbookings";
const url3 = "http://localhost:5055/api/v6/allrooms";
const Home = () => {
  const [state, setState] = useState({
    hostels: [],
  });
  const [state1, setState1] = useState({
    landlords: [],
  });
  const [state2, setState2] = useState({
    bookings: [],
  });
  const [state3, setState3] = useState({
    rooms: [],
  });

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        let hostels = [];
        res.data.result.forEach((i) => {
          hostels.push(i);

          setState({
            ...state,
            hostels,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useEffect(() => {
    axios
      .get(url1)
      .then((res) => {
        let landlords = [];
        res.data.result.forEach((g) => {
          landlords.push(g);

          setState1({
            ...state1,
            landlords,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useEffect(() => {
    axios
      .get(url2)
      .then((res) => {
        let bookings = [];
        res.data.result.forEach((i) => {
          bookings.push(i);

          setState2({
            ...state2,
            bookings,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
  useEffect(() => {
    axios
      .get(url3)
      .then((res) => {
        let rooms = [];
        res.data.result.forEach((i) => {
          rooms.push(i);

          setState3({
            ...state3,
            rooms,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <input type="checkbox" id="nav-toggle" defaultChecked />
      <SideBar active="home" />
      <div className="main_ctr">
        <Header />
        <main>
          <div className="cards_ctr">
            <div className="single_card">
              <span style={{ color: "gray" }}>
                <i className="las la-users"></i>
              </span>
              <div className="">
                <div>Hostel Owners</div>
                <div style={{ color: "gray" }}>{state1.landlords.length}</div>
              </div>
            </div>
            <div className="single_card">
              <span style={{ color: "gray" }}>
                <i className="las la-home"></i>
              </span>
              {/* {state.map((a) => ( */}
              <div className="">
                <div>Total Hostels</div>
                <div style={{ color: "gray" }}>{state.hostels.length}</div>
              </div>
              {/* // ))} */}
            </div>
            <div className="single_card">
              <span style={{ color: "gray" }}>
                <i className="las la-users-cog"></i>
              </span>
              <div className="">
                <div>Bookings</div>
                <div style={{ color: "gray" }}>{state2.bookings.length}</div>
              </div>
            </div>
            <div className="single_card">
              <span style={{ color: "gray" }}>
                <i className="las la-restroom"></i>
              </span>
              <div className="">
                <div style={{ color: "black" }}>Total No of rooms</div>
                <div style={{ color: "gray" }}>{state3.rooms.length}</div>
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
        </main>
      </div>
    </>
  );
};
export default Home;
