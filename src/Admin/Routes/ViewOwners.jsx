import React from "react";
import "../../Admin/Design/Home.css";
import { Header } from "../../components/Header/Header";
import { SideBar } from "../../components/SideBar/SideBar";
import { HostelOwnerTbl } from "../../components/Tables/HostelOwnerTbl";
export const HostelOwners = () => {
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
