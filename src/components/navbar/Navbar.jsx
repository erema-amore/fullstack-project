
import React from 'react'
import style from './navbar.module.css'
import logo from '../../img/Navbar/navBar_logo.jpg'

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));


  return (
    <div className={style.main_navbar}>
      <img src={logo} alt=""  className={style.navbar_logo}/>
      <h3>About Us</h3>
      <h3>Jobs</h3>
      <div>
      <input type="text" className={style.navbar_search_input} />
      <button className={style.navbar_search_btn}>Search</button>
      </div>
      <h3>Register</h3>
      <h3>Login</h3>
      <h3>Logout</h3>
      <h3>Recruiter</h3>
      <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
    </div>
  )
}

export default Navbar