import React from "react";
import "../../Admin/Design/Home.css";
import { Header } from "../../components/Header/Header";
import { SideBar } from "../../components/SideBar/SideBar";
import { PendingTbl } from "../../components/Tables/PendingHostelsTbl";

export const PendingHostel = () => {
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
            <PendingTbl />
          </div>
        </div>
      </section>
    </>
  );
};
