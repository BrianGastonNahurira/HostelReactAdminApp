import React from "react";
import "../../Admin/Design/Home.css";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import { PendingTbl } from "../Components/Tables/PendingHostelsTbl";

export default () => {
  return (
    <>
      <input type="checkbox" id="nav-toggle" defaultChecked />
      <SideBar active="pendinghostels" />
      <div className="main_ctr">
        <Header />
        <main>
          <div>
            <h2 style={{ color: "gray", textAlign: "center" }}>
              {" "}
              Pending Hostels
            </h2>
          </div>

          <div className="card">
            <PendingTbl />
          </div>
        </main>
      </div>
    </>
  );
};
