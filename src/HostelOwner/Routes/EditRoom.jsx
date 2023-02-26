import {  Alert as MuiAlert,
    Slide, Button, FormControl, InputLabel, MenuItem, Select, Snackbar, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import FormsApi from '../../api/api'
import Sidebar from '../Components/sidebar/Sidebar'
import Header from '../Components/Topbar/Header'

  //alert for material ui
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function EditRoom() {
  const params = useParams();
    const [state, setState] = useState({
    room: {},
    mui: { snackBarPosition: { vertical: "top", horizontal: "right" } },

    });
    useEffect(() => {
        (async () => {
          let res = await new FormsApi().get(`/room/one/${params.id}`);
          if (res !== "Error") {
            if (res.status !== false) {
              setState({
                ...state,
                room: res.result || {},
              });
            }
          }
        })();
    
        return () => {
          setState({
            room: {},
            mui: {
              snackBarOpen: false,
              snackBarMessage: "",
              snackBarStatus: "info",
              snackBarPosition: { vertical: "top", horizontal: "right" },
            },
          });
        };
      }, []);
      const editRoom = async (e) => {
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
        let res = await new FormsApi().put(`/editroom/${params.id}`,
          form_contents
        );
        if (res !== "Error") {
          if (res.status !== false) {
            setState({
              ...state,
              mui: {
                ...state.mui,
                snackBarMessage: "Room Updated Successfully....",
                snackBarStatus: "success",
                snackBarOpen: true,
              },
            });
         window.location.reload();
          } else {
            setState({
              ...state,
              mui: {
                ...state.mui,
                snackBarMessage: "Updating room Failed, Server Error....",
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
                "Updating Room Failed, Check your internet....",
              snackBarStatus: "warning",
              snackBarOpen: true,
            },
          });
        }
      };

     //close snackBar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState({
      ...state,
      mui: { ...state.mui, snackBarMessage: "", snackBarOpen: false },
    });
  };
  return (
    <>
      <Snackbar
        open={state.mui.snackBarOpen}
        anchorOrigin={state.mui.snackBarPosition}
        autoHideDuration={4500}
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
      <Sidebar active="home" />
      <div className="main_ctr">
        <Header />
        <main>
        <div className="__backhme">
            <Link to="/">
              <Button variant="contained" color="primary">
                Back
              </Button>
            </Link>
          </div>
          <div className="manage-comp-ctr">
            <div style={{ marginBlock: 10 }}>New Room</div>
            <form className="room-ctr-fields" onSubmit={editRoom}>
              <div className="room-inputs-ctr-divided">

              <TextField
                  label="Room Type"
                  name="room_type"
                  variant="filled"
                  color="primary"
                  style={{ width: "48%" }}
                  value={state.room.room_type || " "}
                  onChange={(e) => {
                    setState({
                      ...state,
                      room: {
                        ...state.room,
                        room_type: e.target.value,
                      },
                    });
                  }}
                />
                <TextField
                  label="Room Description"
                  name="room_description"
                  variant="filled"
                  color="primary"
                  style={{ width: "48%" }}
                  value={state.room.room_description || " "}
                  onChange={(e) => {
                    setState({
                      ...state,
                      room: {
                        ...state.room,
                        room_description: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <div className="room-inputs-ctr-divided">
                <TextField
                  label="Room Number"
                  name="room_number"
                  variant="filled"
                  color="primary"
                  style={{ width: "48%" }}
                  value={state.room.room_number || " "}
                  onChange={(e) => {
                    setState({
                      ...state,
                      room: {
                        ...state.room,
                        room_number: e.target.value,
                      },
                    });
                  }}
                />
                <TextField
                  label="Room Fee(UGX)"
                  name="room_fee"
                  variant="filled"
                  color="primary"
                  style={{ width: "48%" }}
                  value={state.room.room_fee || " "}
                  onChange={(e) => {
                    setState({
                      ...state,
                      room: {
                        ...state.room,
                        room_fee: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <div>
                <Button variant="outlined" color="primary" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  )
}

export default EditRoom