import { useState } from "react";
import Avatar from "..//..//../assets/profileimg.png";

import "./header.css";

const Header=()=>{
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
    return(
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

    );
    
}
export default Header;