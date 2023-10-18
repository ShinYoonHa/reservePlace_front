import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import MyPage from "./MyPage";
import Withdraw from "./Withdraw";

function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/" element={<App />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
