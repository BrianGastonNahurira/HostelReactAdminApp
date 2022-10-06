import React, {useState} from "react";
import { Base64 } from "js-base64";
import "../Login/login.css";
import Logo from "..//../assets/kanlytelogo.png";
import { Button, Checkbox, CircularProgress, FormControlLabel, FormGroup, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import FormsApi from "../../api/api";
const Login = () => {
  const [rememberMe, setRememberMe] = useState(true);
  const [apiFeedBackError, setApiFeedBackError] = useState(false);
  const [submit, setSubmit] = useState(false);

//submit form
  const form_submit = async(e)=>{
    e.preventDefault();
    setSubmit(true);
    const fd = new FormData(e.target);
    let form_content = {};
    fd.forEach((value, key) => {
      form_content[key] = value;
    });
    let api = new FormsApi();
    let res = await api.post("/loginadmin", form_content);
    if (res === "Error") {
      setApiFeedBackError(true);
      setSubmit(false);
      return;
    }
    if (res.status === false) {
      setApiFeedBackError(true);
      setSubmit(false);
    } else {
      if (rememberMe) {
        const data = Base64.encode(
          JSON.stringify({ ...res.user, role: res.role })
        );
        localStorage.setItem("token", data);
        setSubmit(false);
        window.location.reload();
      } else {
        const data = Base64.encode(
          JSON.stringify({ ...res.user, role: res.role })
        );
        sessionStorage.setItem("token", data);
        setSubmit(false);
        window.location.reload();
      }
    }


  }
  return (
    <>
      <div className="m-ctr">
      <div className="ctr">
        <form onSubmit={form_submit}>
        <img
          alt="Hostel"
          src={Logo}
          height="120px"
          width="150px"
          style={{  }}
        />
        <div
          className="header-txt"
          style={{
            // margin: "15px 0px",
          }}
        >
          Beacon Hostels
        </div>
        <div className="loginCtr">
          <TextField
            name="email"
            label="Email"
            error={apiFeedBackError}
            helperText={
            apiFeedBackError ? "Wrong Email or some network error"
           : ""
            }
            fullWidth
            required
            style={{
            width: "250px",
            display: "block",
            margin: "15px 0px",
            }}
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            required
            error={apiFeedBackError}
            helperText={
            apiFeedBackError ? "Wrong Password or some network error" : ""
            }
            fullWidth
            style={{
            display: "block",
            margin: "50px 0px",
            }}
          />
        <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name="rem_me"
                      checked={rememberMe}
                      onChange={() => {
                        setRememberMe(!rememberMe);
                      }}
                    />
                  }
                  label="Remember Me On this Device"
                />
              </FormGroup>
              </div>
        <div className="submitCtr">
        <Button
                color="primary"
                variant={submit ? "outlined" : "contained"}
                type="submit"
                style={{ width: "100%" }}
              >
                <CircularProgress
                  size={15}
                  thickness={10}
                  style={{
                    display: submit ? "inline-block" : "none",
                    marginRight: "20px",
                  }}
                />
                {submit ? "Please Wait..." : "Login"}
        <span style={{ fontSize: "18.5px", marginLeft: "10px" }}>
              <i className="las la-sign-in-alt"></i></span>
              </Button>
        </div>
      </form>
      </div>
      <div className="text-ctr">
          <div>Hello here!</div>
         <div>Welcome to the Beacon Hostel management System.</div>
         <div>  We Manage hostels sorrounding the university, Help Students  get
          rooms, and work with online systems to help them deliver orders to
          students in their respective homes</div>
      <div>Don't have an account? Contact Admin for an account by clicking below</div>
            <div>
              <Link to="/">
                <Button variant="contained" color="success">
                  Contact Admin
                  <span style={{ fontSize: "18.5px", marginLeft: "10px" }}>
                  <i className="las la-phone-alt"></i>
                  </span>
                </Button>
              </Link>
            </div>
      </div>
    </div>
    </>
  );
};
export default Login;

export function Logout() {
  sessionStorage.removeItem("token");
  window.location.replace("/");
}
