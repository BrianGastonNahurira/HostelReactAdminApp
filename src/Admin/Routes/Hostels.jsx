import React from "react";
import "../../Admin/Design/Home.css";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import { HostelTable } from "../Components/Tables/HostelTbl";

export default() => {
  return (
    <>
      <section className="hostels-page">
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
            <h2 style={{ color: "gray", textAlign: "center" }}> All Hostels</h2>
          </div>

          <div className="card">
            <HostelTable />
          </div>
        </div>
      </section>
    </>
  );
};
