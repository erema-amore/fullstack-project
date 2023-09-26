import React, { useEffect } from "react";
import {
  refreshToken,
  refreshUserToken,
  logoutUser,
  logout,
  isRecruiterLogin,
  isUserLogin,
  isUUserLogin,
} from "../../helpers/functions";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./Navbar.css";
import Logo from "../../icons/Logo.svg";


const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div id="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={Logo} alt="error" onClick={() => navigate('/')} />
        </div>
        <ul className="navbar__titles">
          <li className="navbar__item">Home</li>
          <li className="navbar__item" onClick={() => navigate('/posts/')}>JOBS</li>
          <li className="navbar__item" onClick={() => navigate('/recruiter/')}>Employer</li>
        </ul>
        <div className="navbar__auth__block">
          {isUUserLogin() ? (
            <> 
              <button onClick={() => {logoutUser(); navigate('/'); }}>User Logout</button>
            <li className="navbar__item" onClick={() => navigate('/profile/user/')} >Candidate Profile</li>
            </>
          ) : (
            <>
            {isUserLogin() ? (
              <>
              <button onClick={() => {logout(); navigate('/'); }}>Recruiter Logout</button>
              <li className="navbar__item" onClick={() => navigate('/profile/req/')}>Recruiter Profile</li>
              </>
            ) : (
              <>
            <button className="navbar__login" onClick={() => navigate('/account/user-log/')}>Login</button>
            <button className="navbar__register" onClick={() => navigate('/account/user-reg/')}>Sign Up</button>
            </>
            ) }
            </>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
