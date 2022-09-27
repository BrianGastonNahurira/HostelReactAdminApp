import React from "react";
import "../../Admin/Design/Home.css";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import { HostelOwnerTbl } from "../Components/Tables/HostelOwnerTbl";
const HostelOwners = () => {
  return (
    <>
      <section className="hostelOwners-page">
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
              All LandLords and their Hostels
            </h2>
          </div>

          <div className="card">
            <HostelOwnerTbl />
          </div>
        </div>
      </section>
    </>
  );
};
export default HostelOwners;
