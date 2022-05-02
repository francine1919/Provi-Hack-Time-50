import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUsPage from "../Pages/AboutUsPage/AboutUsPage";
import AgroWalletPage from "../Pages/AgroWalletPage/AgroWalletPage";
import CarWalletPage from "../Pages/CarWalletPage/CarWalletPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Map from "../Pages/mapaPage/map";
import SignUp from "../Pages/SignUp/SignUp";
import TermsPage from "../Pages/TermsPage/TermsPage";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/aboutus" element={<AboutUsPage />} />
          <Route exact path="/agro/user/wallet" element={<AgroWalletPage />} />
          <Route exact path="/car/user/wallet" element={<CarWalletPage />} />
          <Route exact path="/terms" element={<TermsPage />} />
          <Route exact path="/map" element={<Map />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
