import React, { useEffect } from "react";
import {
  refreshToken,
  refreshUserToken,
  logout,
  isRecruiterLogin,
  isUserLogin,
} from "../../helpers/functions";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./Navbar.css";
import Logo from "../../icons/Logo.svg";

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={Logo} alt="error" />
        </div>
        <ul className="navbar__titles">
          <li className="navbar__item">Home</li>
          <li className="navbar__item">Employer</li>
          <li className="navbar__item">Candidate</li>
        </ul>
        <div className="navbar__auth__block">
          <button className="navbar__login">Login</button>
          <button className="navbar__register">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
