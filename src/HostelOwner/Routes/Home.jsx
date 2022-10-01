import React, { useEffect,useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material"
import { Link } from "react-router-dom"
import Sidebar from "../Components/sidebar/Sidebar"
import Header from "../Components/Topbar/Header";
import "./designs/home.css";

const Home=()=>{
  const [state, setState] = useState({
    AnchorEl: null,
    AnchorElRooms: null,
    open: false,
    dialog: false,
    message: "",
    mui: {
        snackBarOpen: false,
        snackBarMessage: "",
        snackBarStatus: "info",
        snackBarPosition: { vertical: "top", horizontal: "right" },
      },
  });
  //mui popup
 const closePopUp=(event, reason)=>{
    if(reason === "clickaway"){
    return;
    }
    setState({
        ...state,
        mui:{
        ...state.mui,
        open: false,
        message: "Please Wait...",
        messageState: "info",
        }
      });
 }
 const handleClose = () => {
    setState({
   ...state,
    dialog: false
   });
    };
    
const handleCloseActionsRooms=()=>{
    setState({ 
   ...state,
   AnchorElRooms: null,
   });
  }
const handleOpenActions = (e) => {
      setState({ ...state, 
          AnchorEl: e.currentTarget });
    };
const handleCloseActions = () => {
      setState({ ...state,
           AnchorEl: null });
    };
const handleOpenActionsRooms = (e) => {
        setState({ ...state, 
        AnchorElRooms: e.currentTarget });
      };
    
    return(
        <>
        <input type="checkbox" id="nav-toggle" defaultChecked />
        <Sidebar active = "home" />
            <div className="main_ctr">
           <Header /> 
           <main>
            <div className="cards_ctr">
            <div className="single_card">
                <div className="">
                  <h3>40</h3>
                  <span>
                    Total Bookings <br />
                  </span>
                </div>
                <div className="">
                  <span className="las la-bed"> </span>
                </div>
              </div>
              <div className="single_card">
                <div className="">
                  <h3>10</h3>
                  <span>Free Rooms</span>
                </div>
                <div className="">
                  <span className="las la-bed"></span>
                </div>
                </div>
                <div className="single_card">
                <div className="">
                  <h3>57</h3>
                  <span>Occupied Rooms</span>
                </div>
                <div className="">
                  <span className="las la-bed"> </span>
                </div>
              </div>
              <div className="single_card">
                <div className="">
                  <h3>30</h3>
                  <span>Tenants</span>
                </div>
                <div className="">
                  <span className="las la-users"> </span>
                </div>
              </div>
            </div>
            <div className="top_btns">
                <div>
                  <h2>My Hostels</h2>
                </div>
                <div>
                  <Link to="/hostels/new">
                    <Button variant="contained" color="primary">
                    New Hostel
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="rooms_grid">
                <div className="recent_project_ctr">
                    <div className="card">
                        <div className="card_header">
                            <h3>Rooms Available</h3>
                        </div>
                        <div className="card-body">
                          <table  width="100%">
                            <thead>
                                <tr>
                                <td>Number</td>
                                <td>Room Fee(UGX)</td>
                                <td>Room Type</td>
                                </tr>
                            </thead>
                          </table>
                        </div>
                    </div>
                </div>
              </div>
            </main>          
            </div>
        </>
    )
}
export default Home;