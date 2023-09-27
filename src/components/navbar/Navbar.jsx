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

// BurgerMenu

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import "./Navbar.css";
import Logo from "../../icons/Logo.svg";


const Navbar = () => {
const navigate = useNavigate()

// burgermenu
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};
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
               <li className="navbar__item" onClick={() => navigate('/post-create/')} >Create New Post</li>
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

      {/* // burgerMenu  */}
      <div className="burger">
      <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar onClick={() => navigate('/posts/')}/> Jobs
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar onClick={() => navigate('/recruiter/')}/> Employer
        </MenuItem>
        <Divider />
        {isUUserLogin() ? (
          <>
          <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" onClick={() => {logoutUser(); navigate('/'); }} />
          </ListItemIcon>
          Logout
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" onClick={() => navigate('/profile/user/')}  />
          </ListItemIcon>
          User Profile
        </MenuItem>
          </>
        ) : (
          <>
          {isUserLogin() ? (
            <>
            <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" onClick={() => navigate('/post-create/')} />
          </ListItemIcon>
          Create Post
        </MenuItem>   
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" onClick={() => {logout(); navigate('/'); }} />
          </ListItemIcon>
          Recruiter Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" onClick={() => {logout(); navigate('/'); }} />
          </ListItemIcon>
          Recruiter Logout
        </MenuItem>
            </>
          ) : (
            <>
             <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Register
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
          <PersonAdd fontSize="small" />
          </ListItemIcon>
          Login
        </MenuItem>
            </>
          )}
          </>
        )}
               
      </Menu>
    </React.Fragment>

      </div>
    </div>
    
  );
};

export default Navbar;
