import React from "react";
import "../../Admin/Design/Home.css";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import { StateTable } from "../Components/Tables/Table";

export default () => {
  return (
    <>
      <section>
        <div className="home-header">
          <Header />
        </div>
        <div>
          <SideBar />
        </div>
        <div
          className="home-body  "
          style={{ maxHeight: "90vh", overflowY: "scroll" }}
        >
          <div>
            <h2 style={{ color: "gray", textAlign: "center" }}>
              {" "}
              ALl Current Bookings
            </h2>
          </div>

          <div className="card">
            <StateTable />
          </div>
        </div>
      </section>
    </>
  );
};
