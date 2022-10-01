import React,{useState} from "react";
// import "../Drawables/passport.jpeg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../Header/Header.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import Avatar from "..//..//../assets/profileimg.png";


const Header = () => {
  const [AnchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpenActions = (e) => {
      setAnchorEl(e.currentTarget);
    };
    const handleCloseActions = () => {
      setAnchorEl(null);
    };
  
    const handleClickOpenDialog = () => {
      setOpen(true);
    };
  
    const handleCloseDialog = () => {
      setOpen(false);
    }
  return (
    <>
    <header>
      <h2>
        <label htmlFor="nav-toggle">
          <span className="las la-bars"></span>
        </label>
        <span className="health_unit_name">Hostel Management</span>
      </h2>
      <div className="" style={{ display: "flex", alignItems: "center" }}>
        <div className="" style={{ fontSize: "42px", marginRight: 20 }}>
          <i className="las la-bell"></i>
        </div>
        <div
          className="user-wrapp"
          aria-controls="reception-actions"
          aria-haspopup="true"
          onClick={handleOpenActions}
          style={{ cursor: "pointer" }}
        >
          <img src={Avatar} alt="" width="40px" height="40px" />
          <div className="">
            <h4>JAMES</h4>
            <small>Admin</small>
          </div>
        </div>
      </div>
      </header>
  </>
    // <div className="header-ctr card">
    //   <div className="beaconLogo" style={{ marginLeft: "5px" }}>
    //     <div className="div-bar">
    //       <ReorderIcon
    //         className="bars"
    //         fontSize="large"
    //         style={{
    //           color: "gray",
    //           padding: "10px",
    //           marginTop: "7px",
    //         }}
    //       />
    //     </div>
    //     <div className="beaconadminlogo">
    //       <h2>BeaconAdmin</h2>
    //     </div>
    //   </div>
    //   <div
    //     className="userdetails"
    //     style={{
    //       padding: "7px",
    //       marginTop: "8px",
    //       display: "flex",
    //       color: "gray",
    //       justifyContent: "center",
    //     }}
    //   >
    //     <AccountCircleIcon fontSize="large" style={{ marginTop: "0px" }} />
    //     <p>Gaston</p>
    //   </div>
    // </div>
  );
};
export default Header;
