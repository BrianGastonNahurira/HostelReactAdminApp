import React, { useEffect, useState } from 'react'
import FormsApi from '../../api/api'
import Sidebar from '../Components/sidebar/Sidebar'
import Header from '../Components/Topbar/Header'
import user from "../../app.config";
export default function Addhostel() {
const [state, setState] = useState({
  bookings: [],
});

useEffect(() => {
  (async () => {
    const res = await new FormsApi().get("/allbookings");
    if (res !== "Error") {
      if (res.status !== false) {
        setState({
          ...state,
          bookings: res.result,
        });
      }
    }
  })();
}, []);
const landlord_bookings = state.bookings.filter((el)=>{
  return el.landlord_id === user.id;
});
  return (
    <>
      <input type="checkbox" id="nav-toggle" defaultChecked />
      <Sidebar active="bookings" />
      <div className='main_ctr'>
      <Header /> 
      <main>
        <div className='table_card_ctr'>
          <div className='recent_project_ctr'>
            <div className='card'>
              <div className='card_header'>
              <h3>List of Bookings</h3>
              </div>
              <div className="card-body">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Full name</td>
                          <td>Hostel name</td>
                          <td>District</td>
                          <td>Contact</td>
                          <td>Room No.</td>
                          <td>type of entry</td>
                          <td>Gmail</td>
                        </tr>
                      </thead>
                      <tbody>
                      {landlord_bookings.length === 0 ? (
                        <tr>
                          <td>No bookings to display...</td>
                        </tr>
                      ) : (
                        landlord_bookings.map((v, i) => {
                          return (
                            <tr key={i}>
                              <td>{v.name}</td>
                              <td>{v.name_of_hostel}</td>
                              <td>{v.location}</td>
                              <td>{v.telephone_number}</td>
                              <td>{v.room_number}</td>
                              <td>{v.type_of_entry}</td>
                              <td>{v.email}</td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
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
