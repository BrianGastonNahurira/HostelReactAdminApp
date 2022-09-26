import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginAdmin } from "../components/Admin/login";

export const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginAdmin />}></Route>
        {/* <Route path="*" element={<Notfound />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};
