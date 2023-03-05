import React from "react";
import "./App.css";
import "line-awesome/dist/line-awesome/css/line-awesome.css";
import user from "./app.config";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Admin from "./Admin/index";
import HostelOwner from "./HostelOwner/index";
import NotFound from "./components/NotFound/404";

const App = () =>
  user.role === "admin" ? (
    <Admin />
  ) : user.role === "landlord" ? (
    <HostelOwner />
  ) : (
    <StartStack />
  );

export default App;

const StartStack = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
