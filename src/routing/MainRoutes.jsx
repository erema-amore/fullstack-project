import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import RecruiterLoginPage from "../pages/LoginPage/RecruiterLoginPage";
import RecruiterRegisterPage from "../pages/RegisterPage/RecruiterRegisterPage";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recruter-register/" element={<RecruiterRegisterPage />} />
      <Route path="/recruter-login/" element={<RecruiterLoginPage />} />
    </Routes>
  );
};

export default MainRoutes;
