import React from "react";
import { Header } from "../../components/Header/Header";
import { SideBar } from "../../components/SideBar/SideBar";
import "../../Admin/Design/Home.css";
import { HostelTable } from "../../components/Tables/HostelTbl";

export const Hostels = () => {
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
