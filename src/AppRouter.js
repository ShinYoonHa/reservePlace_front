import { Box, Typography } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Modify from "./Modify";

function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/modify" element={<Modify />} />
          <Route path="/" element={<App />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
