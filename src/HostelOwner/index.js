import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import NotFound from "../components/NotFound/404";
import Bookings from "./Routes/Bookings";
import Home from "./Routes/Home";

export default function HostelOwner(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
