import React from "react";
import "../../Admin/Design/Home.css";
// import FormsApi from "../../api/api";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import { HostelTable } from "../Components/Tables/HostelTbl";
import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  return (
    <>
      <input type="checkbox" id="nav-toggle" defaultChecked />
      <SideBar active="hostels" />
      <div className="main_ctr">
        <Header />
        <main>
          <div>
            <h2 style={{ color: "gray", textAlign: "center" }}> All Hostels</h2>
          </div>

          <div className="card">
            <HostelTable />
          </div>
        </main>
      </div>
    </>
  );
};
