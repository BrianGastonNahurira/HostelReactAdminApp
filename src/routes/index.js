import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Admin/Routes/Home";
import { StateTable } from "../components/Tables/Table";
import { Header } from "../components/Header/Header";
import { SideBar } from "../components/SideBar/SideBar";
import { NotFound } from "../NotFound";
import { AddHostel } from "../Admin/Routes/AddHostel";
import { Hostels } from "../Admin/Routes/Hostels";
import { HostelOwners } from "../Admin/Routes/ViewOwners";
import { Bookings } from "../Admin/Routes/Bookings";
import { PendingHostel } from "../Admin/Routes/PendingHostel";
import { RegisterHostelOwners } from "../Admin/Routes/RegisterOwners";
import { Login } from "../components/Login/Login";

export const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/sidebar" element={<SideBar />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/table" element={<StateTable />}></Route>
        <Route path="/addhostel" element={<AddHostel />}></Route>
        <Route path="/hostels" element={<Hostels />}></Route>
        <Route path="/hostelowners" element={<HostelOwners />}></Route>
        <Route path="/bookings" element={<Bookings />}></Route>
        <Route path="/pendinghostels" element={<PendingHostel />}></Route>
        <Route
          path="/reghostelowner"
          element={<RegisterHostelOwners />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
