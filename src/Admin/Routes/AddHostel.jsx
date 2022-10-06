import React from "react";
import "../../Admin/Design/AddHostel.css";
import { Button, TextField } from "@mui/material";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";

import { useEffect, useState } from "react";
import axios from "axios";

const url = "http://localhost:5051/api/v6//edithostel/:id";

const AddHostel = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log("waooo");
        setState(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <input type="checkbox" id="nav-toggle" defaultChecked />
      <SideBar active="addhostel" />
      <div className="main_ctr">
        <Header />
        <main>
          <h2 style={{ textAlign: "center", color: "gray" }}>
            Register A New Hostel
          </h2>
          <div className="hostelform  card ">
            <form>
              <div className="description-form">
                <h4 style={{ color: "gray", marginLeft: "3vh" }}>
                  Hostel Form
                </h4>
                <div
                  className="detail-field"
                  style={{
                    border: "1px solid gray",
                    padding: "20px",
                    margin: "10px",
                  }}
                >
                  <div style={{ justifyContent: "space-around" }}>
                    <TextField
                      color="primary"
                      label="Hostel Name"
                      style={{ width: "45%" }}
                      variant="outlined"
                      name="hostel_name"
                      type="text"
                    />
                    <TextField
                      color="primary"
                      label="Distance from University"
                      style={{ width: "45%", marginLeft: "25px" }}
                      variant="outlined"
                      name="dist_fron_uni"
                      type="text"
                    />
                  </div>
                  <div>
                    <TextField
                      color="primary"
                      label="Hostel Description"
                      style={{ width: "95%", margin: "30px 0px 0px 0px" }}
                      variant="outlined"
                      name="hostel_des"
                      type="text"
                    />
                  </div>
                  <div
                    style={{
                      justifyContent: "space-around",
                      paddingTop: "30px",
                    }}
                  >
                    <TextField
                      color="primary"
                      label="Amount For Single Room"
                      style={{ width: "45%" }}
                      variant="outlined"
                      name="single_room"
                      type="text"
                    />
                    <TextField
                      color="primary"
                      label="Amount For Double Room"
                      style={{ width: "45%", marginLeft: "25px" }}
                      variant="outlined"
                      name="double_room"
                      type="text"
                    />
                  </div>
                  <div>
                    <TextField
                      color="primary"
                      label="Telephone Number"
                      style={{ width: "65%", margin: "30px 0px 0px 50px" }}
                      variant="outlined"
                      name="tel"
                      type="number"
                    />
                  </div>
                  <div
                    style={{
                      justifyContent: "space-around",
                      paddingTop: "30px",
                    }}
                  >
                    <TextField
                      color="primary"
                      label="Single Rooms Available"
                      style={{ width: "45%" }}
                      variant="outlined"
                      name="single_room_no"
                      type="number"
                    />
                    <TextField
                      color="primary"
                      label="Double Rooms Available"
                      style={{ width: "45%", marginLeft: "25px" }}
                      variant="outlined"
                      name="double_room_no"
                      type="number"
                    />
                  </div>
                  <div
                    style={{
                      justifyContent: "space-around",
                      paddingTop: "30px",
                    }}
                  >
                    <TextField
                      color="primary"
                      label="Booking Fee"
                      style={{ width: "45%" }}
                      variant="outlined"
                      name="booking_fee"
                      type="number"
                    />
                    <TextField
                      color="primary"
                      label="Account Number"
                      style={{ width: "45%", marginLeft: "25px" }}
                      variant="outlined"
                      name="account_no"
                      type="number"
                    />
                  </div>
                  <Button
                    variant="contained"
                    style={{
                      padding: "5px 25px 5px 25px",
                      margin: "30px 0px 0px 180px",
                    }}
                    type="submit"
                  >
                    SUBMIT
                  </Button>
                </div>
              </div>
            </form>
            <div className="image-form">
              <h4 style={{ color: "gray", marginLeft: "3vh" }}>Image Form</h4>

              <div
                className="image-field"
                style={{
                  border: "1px solid gray",
                  padding: "20px",
                  margin: "10px",
                }}
              >
                <Button
                  variant="outlined"
                  style={{
                    padding: "15px 25px 15px 25px",
                    margin: "5px 0px 5px 5px",
                  }}
                >
                  UPLOAD HOSTEL IMAGES
                </Button>
                <div
                  style={{
                    border: "1px solid gray",
                    padding: "10px",
                    marginTop: "10px",
                  }}
                >
                  No images Choosen
                </div>
                <Button
                  variant="contained"
                  style={{
                    padding: "10px 5px 5px 10px",
                    margin: "25px 0px 5px 5px",
                  }}
                >
                  SUBMIT HOSTEL IMAGES
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default AddHostel;
