import React from "react";
import "../../Admin/Design/Home.css";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import { HostelOwnerTbl } from "../Components/Tables/HostelOwnerTbl";
const HostelOwners = () => {
  return (
    <>
      <input type="checkbox" id="nav-toggle" defaultChecked />
      <SideBar active = "hostelowners" />
      <div className="main_ctr">
          <Header />
        <main>
          <div>
            <h2 style={{ color: "gray", textAlign: "center" }}>
              {" "}
              All LandLords and their Hostels
            </h2>
          </div>

          <div className="card">
            <HostelOwnerTbl />
          </div>
        </main>
      </div>
    </>
  );
};
export default HostelOwners;
