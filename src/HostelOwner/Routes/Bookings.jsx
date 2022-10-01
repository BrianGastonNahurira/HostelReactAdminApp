import React from 'react'
import Sidebar from '../Components/sidebar/Sidebar'
import Header from '../Components/Topbar/Header'

export default function Addhostel() {
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
                          <td>Firstname</td>
                          <td>Lastname</td>
                          <td>Address</td>
                          <td>Contact</td>
                          <td>Room type</td>
                          <td>Booking fee(UGX)</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                        <td>Okou</td>
                          <td>John</td>
                          <td>Soroti</td>
                          <td>0778686859</td>
                          <td>Single</td>
                          <td>200,000(UGX)</td>
                        </tr>
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
