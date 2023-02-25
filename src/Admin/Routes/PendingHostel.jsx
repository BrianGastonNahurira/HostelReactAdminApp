import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../Admin/Design/Home.css";
import "..//Design/pending.css";
import FormsApi from "../../api/api";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";

export default () => {
  const [state, setState] = useState({
    pending_hostels: [],
    all_hostels: [],
  });

  useEffect(() => {
    (async () => {
      const res = await new FormsApi().get("/allhostels");
      if (res === "Error") {
        console.log(res);
      } else {
        if (res.status) {
          let pending_hostels = [];
          let all_hostels = [];
          res.result.forEach((el) => {
            if (el.confirmed) {
              all_hostels.push(el);
            } else {
              pending_hostels.push(el);
            }
          });
          setState({ ...state, pending_hostels, all_hostels });
        }
      }
    })();
  }, []);

  return (
    <>
      <input type="checkbox" id="nav-toggle" defaultChecked />
      <SideBar active="pendinghostels" />
      <div className="main_ctr">
        <Header />
        <main>
          <div className="card">
            <div className="pdts-header-btns">
              <div>
                <h2>Beacon Hostels</h2>
              </div>
              <div>
                <Link to="/">
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ marginInline: 10 }}
                  >
                    Back
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hostels-grid-ctr trending">
              <div>
                <span>
                  Pending Hostels
                  {`(${state.pending_hostels.length})`}
                </span>
                <table>
                  <thead>
                    <tr>
                      <th>Hostel Name</th>
                      <th>Hostel Owner</th>
                      <th>Booking fee</th>
                      <th>Image</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.pending_hostels.length === 0 ? (
                      <tr>
                        <td>No Rows to display</td>
                      </tr>
                    ) : (
                      state.pending_hostels.map((v, i) => {
                        return (
                          <tr key={i}>
                            <td>{v.hostel_name}</td>
                            <td>{v.hostel_landlord}</td>
                            <td>{v.booking_fee}</td>
                            <td>
                              {v.hostel_images ? (
                                <img
                                  src={JSON.parse(v.hostel_images)[0]}
                                  height={75}
                                  width={75}
                                  style={{ borderRadius: 5 }}
                                />
                              ) : (
                                "..."
                              )}
                            </td>
                            <td>
                              <Link to={`/onehostel/${v.id}`}>
                                <Button variant="outlined" color="primary">
                                  Confirm
                                </Button>
                              </Link>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
