import React, { useState } from "react";
import "../../Admin/Design/AddHostel.css";
import { Button, Snackbar, TextField } from "@mui/material";
import FileUpload from "../../api/files";
import { Link, useNavigate } from "react-router-dom";
import { Alert as MuiAlert, Slide } from "@mui/material";
import user from "../../app.config";
import Sidebar from "../Components/sidebar/Sidebar";
import Header from "../Components/Topbar/Header";
import FormsApi from "../../api/api";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddHostel = () => {
  const [state, setState] = useState({
    step: 1,
    fieldsError: false,
    hostel_id: null,
    mui: {
      snackBarOpen: false,
      snackBarMessage: "",
      snackBarStatus: "info",
      snackBarPosition: { vertical: "top", horizontal: "right" },
    },
  });

  /**
   *
   * @param {formElement} event  Form to be submitted
   *
   * @returns void
   *
   * Method collects info & submits pdt info to the server
   */

  const submitHostelInfo = async (e) => {
    e.preventDefault();
    setState({
      ...state,
      mui: {
        ...state.mui,
        snackBarMessage: "Please Wait...",
        snackBarStatus: "info",
        snackBarOpen: true,
      },
    });

    let fd = new FormData(e.target);
    let form_contents = {};
    fd.forEach((value, name) => {
      form_contents[name] = value;
    });
    let api = new FormsApi();
    let res = await api.post("/newhostel", form_contents);
    if (res.data === "Hostel Exists") {
      setState({
        ...state,
        mui: {
          ...state.mui,
          snackBarMessage: res.data,
          snackBarStatus: "warning",
          snackBarOpen: true,
        },
      });
    } else if (res.status === false) {
      setState({
        ...state,
        mui: {
          ...state.mui,
          snackBarMessage: res.data,
          snackBarStatus: "warning",
          snackBarOpen: true,
        },
      });
    } else {
      setState({
        ...state,
        step: 2,
        hostel_id: res.result.id,
        mui: {
          ...state.mui,
          snackBarMessage: res.data,
          snackBarStatus: "success",
          snackBarOpen: true,
        },
      });
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState({
      ...state,
      mui: {
        ...state.mui,
        snackBarMessage: "",
        snackBarOpen: false,
        snackBarStatus: "info",
      },
    });
  };
  return (
    <>
      <Snackbar
        open={state.mui.snackBarOpen}
        anchorOrigin={state.mui.snackBarPosition}
        autoHideDuration={4000}
        onClose={handleClose}
        message={state.mui.snackBarMessage}
        TransitionComponent={(props) => <Slide {...props} direction="down" />}
      >
        <Alert
          onClose={handleClose}
          severity={state.mui.snackBarStatus}
          sx={{ width: "100%" }}
        >
          {state.mui.snackBarMessage}
        </Alert>
      </Snackbar>

      <input type="checkbox" id="nav-toggle" defaultChecked />
      <Sidebar active="addhostel" />
      <div className="main_ctr">
        <Header />
        <main>
          <h2 style={{ textAlign: "center", color: "gray" }}>
            Register A New Hostel
          </h2>
          <div className="main-ctr card">
            <div className="pdts-header-btns">
              <div>
                <h2>New Hostel</h2>
              </div>
              <div>
            <Link to="/">
              <Button variant="contained" color="primary">
                Back
              </Button>
            </Link>
          </div>
            </div>
            <div className="progress_bar_new_product">
              <div
                style={
                  state.step === 1
                    ? { width: "2%" }
                    : state.step === 2
                    ? { width: "50%" }
                    : { width: "100%" }
                }
              ></div>
            </div>
            <div className="pdts-form-ctr">
              <div className="new_product_form">
                <form
                  onSubmit={submitHostelInfo}
                  className="inputs_ctr"
                  style={
                    state.step === 2
                      ? { opacity: "0.4", pointerEvents: "none" }
                      : {}
                  }
                >
                  <div style={{ marginBlock: 10, fontWeight: "bold" }}>
                    Hostel Information
                  </div>
                  <div className="inputs_ctr_border">
                    <input
                      type="text"
                      name="landlord"
                      value={user.id}
                      hidden
                      onChange={() => {}}
                    />
                    <div className="inputs_ctr_flex">
                      <TextField
                        required
                        variant="outlined"
                        color="primary"
                        label="Hostel Name"
                        name="hostel_name"
                        style={{ width: "45%" }}
                        error={state.fieldsError}
                        helperText={
                          state.fieldsError
                            ? "This field maybe empty, but its required"
                            : ""
                        }
                      />
                      <TextField
                        required
                        variant="outlined"
                        color="primary"
                        label="Distance from University"
                        name="hostel_distance"
                        type="text"
                        style={{ width: "45%" }}
                        error={state.fieldsError}
                        helperText={
                          state.fieldsError
                            ? "This field maybe empty, but its required"
                            : ""
                        }
                      />
                    </div>
                    <div className="inputs_ctr_fullwidth">
                      <TextField
                        required
                        variant="outlined"
                        color="primary"
                        label="Hostel Description"
                        name="hostel_description"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="inputs_ctr_flex">
                      <TextField
                        required
                        variant="outlined"
                        color="primary"
                        label="Amount For Single Room(UGX)"
                        name="single_room_amount"
                        type="number"
                        style={{ width: "45%" }}
                        error={state.fieldsError}
                        helperText={
                          state.fieldsError
                            ? "This field maybe empty, but its required"
                            : ""
                        }
                      />
                      <TextField
                        required
                        variant="outlined"
                        color="primary"
                        label="Amount For Double Room"
                        name="double_room_amount"
                        style={{ width: "45%" }}
                      />
                    </div>
                    <div className="inputs_ctr_fullwidth">
                      <TextField
                        required
                        variant="outlined"
                        color="primary"
                        label="Telephone Number"
                        name="telphone_number"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="inputs_ctr_flex">
                      <TextField
                        required
                        variant="outlined"
                        label="Single Rooms Available"
                        name="single_rooms_available"
                        color="primary"
                        style={{ width: "45%" }}
                        error={state.fieldsError}
                        helperText={
                          state.fieldsError
                            ? "This field maybe empty, but its required"
                            : ""
                        }
                      />
                      <TextField
                        required
                        variant="outlined"
                        color="primary"
                        label="Double Rooms Available"
                        name="double_rooms_available"
                        type="number"
                        style={{ width: "45%" }}
                        error={state.fieldsError}
                        helperText={
                          state.fieldsError
                            ? "This field maybe empty, but its required"
                            : ""
                        }
                      />
                    </div>
                    <div className="inputs_ctr_flex">
                      <TextField
                        required
                        variant="outlined"
                        label="Booking Fee"
                        name="booking_fee"
                        color="primary"
                        multiline
                        style={{ width: "45%" }}
                      />
                      <TextField
                        required
                        variant="outlined"
                        color="primary"
                        label="Account Number"
                        name="hostel_account_no"
                        multiline
                        style={{ width: "45%" }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: 20,
                    }}
                  >
                    <Button variant="outlined" color="primary" type="submit">
                      Submit Hostel
                    </Button>
                  </div>
                </form>
                <div
                  className="inputs_ctr"
                  style={
                    state.step === 1
                      ? { opacity: "0.4", pointerEvents: "none" }
                      : {}
                  }
                >
                  <FileUpload hostel={state.hostel_id} confirming={false} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default AddHostel;
