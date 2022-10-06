import React from "react";
import "../../Admin/Design/Home.css";
import FormsApi from "../../API/api";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import { HostelTable } from "../Components/Tables/HostelTbl";
import { useEffect, useState } from "react";
import axios from "axios";

// const url = "http://localhost:5051/api/v6/pendinghostel";
export default () => {
  // const [state, setState] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

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
