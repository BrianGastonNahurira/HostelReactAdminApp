import React from "react";
import "../../Admin/Design/Home.css";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import { StateTable } from "../Components/Tables/Table";

export default () => {
  return (
    <>
       <input type="checkbox" id="nav-toggle" defaultChecked />
        <SideBar active = "bookings" />
      <div className="main_ctr">
          <Header />
          <main>
          <div>
            <h2 style={{ color: "gray", textAlign: "center" }}>
              {" "}
              ALl Current Bookings
            </h2>
          </div>

          <div className="card">
            <StateTable />
          </div>
          </main>
        </div>
    </>
  );
};
