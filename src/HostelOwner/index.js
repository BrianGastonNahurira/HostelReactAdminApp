import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import NotFound from "../components/NotFound/404";
import Bookings from "./Routes/Bookings";
import NewHostel from "./Routes/NewHostel";
import Home from "./Routes/Home";
import Room from "./Routes/Room";
// import Profile from "./Routes/Profile/_profile";
import EditRoom from "./Routes/EditRoom";
import { LandLordProfile } from "./Routes/Profile/side";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/new-room" element={<Room />} />
        <Route path="/profile" element={<LandLordProfile />} />
        <Route path="/hostels/new" element={<NewHostel />} />
        <Route path="/editroom/:id" element={<EditRoom />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
