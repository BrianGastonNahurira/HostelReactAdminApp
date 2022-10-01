import React from "react";
import "../../Admin/Design/Home.css";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import { HostelTable } from "../Components/Tables/HostelTbl";

export default() => {
  return (
    <>
      <input type="checkbox" id="nav-toggle" defaultChecked />
      <SideBar active = "hostels" />
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
