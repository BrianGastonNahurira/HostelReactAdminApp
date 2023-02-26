import React, {useState, useEffect} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
    Alert as MuiAlert,
    Slide,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Snackbar,
    Button,
    TextField,
  } from "@mui/material";
import FileUpload from "../../api/files";
import FormsApi from "../../api/api";
import "../Design/hostel.css";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
const EditHostel = ()=>{
    const navigate = useNavigate();
    const params = useParams();


    const [state, setState] = useState({
        hostel: {},
        landlord: {},
        files: [],
        filesChanged: false,
        mui: {
            SnackBarOpen: false,
            snackBarMessage: "",
            snackBarStatus: "info",
            snackBarPosition: { vertical: "top", horizontal: "right" },
        },

    })
    useEffect(()=>{
        (async () => {
            let res = await new FormsApi().get(`/hostel/${params.id}`);
            if (res !== "Error") {
              if (res.status !== false) {
                setState({
                  ...state,
                  hostel: res.result.hostel || {},
                  landlord: res.result.landlord || {},
                });
              }
            }
          })();
          return () => {
            setState({
              hostel: {},
              landlord: {},
              files: [],
              filesChanged: false,
              mui: {
                snackBarOpen: false,
                snackBarMessage: "",
                snackBarStatus: "info",
                snackBarPosition: { vertical: "top", horizontal: "right" },
              },
            });
          };
    }, []);

  const editHostel = async (e) => {
    e.preventDefault();
    setState({
      ...state,
      mui: {
        ...state.mui,
        snackBarMessage: "Please Wait....",
        snackBarStatus: "info",
        snackBarOpen: true,
      },
    });
    let formDataInstance = new FormData(e.target);
    let form_contents = {};
    formDataInstance.forEach((el, i) => {
    form_contents[i] = el;
    });
    let res = await new FormsApi().put(`/edit/${params.id}`,form_contents);
    if (res !== "Error") {
      if (res.status !== false) {
        setState({
          ...state,
          mui: {
            ...state.mui,
            snackBarMessage: "Hostel edited Successfully....",
            snackBarStatus: "success",
            snackBarOpen: true,
          },
        });
        setTimeout(() => {
          navigate("/hostels");
        }, 2000);
      } else {
        setState({
          ...state,
          mui: {
            ...state.mui,
            snackBarMessage: "Hostel editting Failed, Server Error....",
            snackBarStatus: "warning",
            snackBarOpen: true,
          },
        });
      }
      
    } else {
      setState({
        ...state,
        mui: {
          ...state.mui,
          snackBarMessage:
            "Hostel editting Failed, Check your internet....",
          snackBarStatus: "warning",
          snackBarOpen: true,
        },
      });
    }
}




    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      setState({
        ...state,
        mui: { ...state.mui, snackBarMessage: "", snackBarOpen: false },
      });
    };
    return(
        <>
        <Snackbar
        open={state.mui.snackBarOpen}
        anchorOrigin={state.mui.snackBarPosition}
        autoHideDuration={5000}
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
      <SideBar active="addhostel" />
      <div className="main_ctr">
        <Header />
        <main>
        <div className="main-ctr card">
        <div className="pdts-header-btns">
              <div>
                <h2>Update Hostel</h2>
              </div>
              <div>
                <Link to="/pendinghostels">
                  <Button variant="outlined" color="primary">
                    Back
                  </Button>
                </Link>
              </div>
            </div>
        <div className="pdts-form-ctr">
        <form onSubmit={editHostel} className="new_product_form">
        <div className="inputs_ctr">
                  <div style={{ marginBlock: 10, fontWeight: "bold" }}>
                    Hostel Info
                  </div>
              
                 <div className="inputs_ctr_border">
                
                    <div className="inputs_ctr_flex">
                    <input
                      type="hidden"
                      name="hostel_id"
                      value={state.hostel.id || " "}
                      onChange={() => {}}
                    />
                      <TextField
                        required
                        variant="outlined"
                        color="primary"
                        label="Hostel Name"
                        name="hostel_name"    
                        style={{ width: "45%" }}
                        value={state.hostel.hostel_name || " "}
                        onChange={(e) => {
                          setState({
                            ...state,
                            hostel: {
                              ...state.hostel,
                              hostel_name: e.target.value,
                            },
                          });
                        }}
                      />
                      <TextField
                        required
                        variant="outlined"
                        color="primary"
                        label="Distance from University"
                        name="hostel_distance"
                        type="text"
                        style={{ width: "45%" }}
                        value={state.hostel.hostel_distance || " "}
                        onChange={(e) => {
                          setState({
                            ...state,
                            hostel: {
                              ...state.hostel,
                              hostel_distance: e.target.value,
                            },
                          });
                        }}
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
                        value={state.hostel.hostel_description || " "}
                        onChange={(e) => {
                          setState({
                            ...state,
                            hostel: {
                              ...state.hostel,
                              hostel_description: e.target.value,
                            },
                          });
                        }}
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
                        value={state.hostel.single_room_amount || " "}
                        onChange={(e) => {
                          setState({
                            ...state,
                            hostel: {
                              ...state.hostel,
                              single_room_amount: e.target.value,
                            },
                          });
                        }}
                      />
                      <TextField
                        required
                        variant="outlined"
                        color="primary"
                        label="Amount For Double Room"
                        name="double_room_amount"
                        style={{ width: "45%" }}
                        value={state.hostel.double_room_amount || " "}
                        onChange={(e) => {
                          setState({
                            ...state,
                            hostel: {
                              ...state.hostel,
                              double_room_amount: e.target.value,
                            },
                          });
                        }}
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
                        value={state.hostel.telphone_number || " "}
                        onChange={(e) => {
                          setState({
                            ...state,
                            hostel: {
                              ...state.hostel,
                              telphone_number: e.target.value,
                            },
                          });
                        }}
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
                        value={state.hostel.single_rooms_available || " "}
                        onChange={(e) => {
                          setState({
                            ...state,
                            hostel: {
                              ...state.hostel,
                              single_rooms_available: e.target.value,
                            },
                          });
                        }}
                      />
                      <TextField
                        required
                        variant="outlined"
                        color="primary"
                        label="Double Rooms Available"
                        name="double_rooms_available"    
                        type="number"
                        style={{ width: "45%" }}
                        value={state.hostel.double_rooms_available || " "}
                        onChange={(e) => {
                          setState({
                            ...state,
                            hostel: {
                              ...state.hostel,
                              double_rooms_available: e.target.value,
                            },
                          });
                        }}
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
                        value={state.hostel.booking_fee || " "}
                        onChange={(e) => {
                          setState({
                            ...state,
                            hostel: {
                              ...state.hostel,
                              booking_fee: e.target.value,
                            },
                          });
                        }}
                      />
                         <TextField
                        required
                        variant="outlined"
                        color="primary"
                        label="Account Number"
                        name="hostel_account_no"
                        multiline
                        style={{ width: "45%" }}
                        value={state.hostel.hostel_account_no || " "}
                        onChange={(e) => {
                          setState({
                            ...state,
                            hostel: {
                              ...state.hostel,
                              hostel_account_no: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                  </div>
                
                </div>
                <div className="inputs_ctr">
                  {state.filesChanged ? (
                    <FileUpload/>
                  ) : (
                    <>
                      <div style={{ marginBlock: 10, fontWeight: "bold" }}>
                        Hostel Images
                      </div>
                      <div className="inputs_ctr_border">
                        <div className="new_pdt_btn_refs_ctr">
                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={() =>
                              setState({ ...state, filesChanged: true })
                            }
                          >
                            Change Images
                          </Button>
                        </div>

                        <div className="images__preview_ctr">
                          {state.hostel.hostel_images
                            ? JSON.parse(state.hostel.hostel_images)
                                .length === 0
                              ? "No Files Chosen"
                              : JSON.parse(state.hostel.hostel_images).map(
                                  (v, i) => {
                                    return (
                                      <div key={i}>
                                        <img src={v} alt="HostelImage" />
                                      </div>
                                    );
                                  }
                                )
                            : "No Hostel Images"}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          marginTop: 20,
                        }}
                      >
                        <Button
                          variant="outlined"
                          color="primary"
                          type="submit"
                        >
                          Submit Hostel
                        </Button>
                      </div>
                    </>
                  )}
                </div>
                
        </form>

        </div>
        </div>

        </main>
        </div>
        </>

    );
}

export default EditHostel;
