
import React, {useEffect} from 'react'
import { refreshToken, refreshUserToken, logout, isRecruiterLogin, isUserLogin } from '../../helpers/functions'
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  const navigate = useNavigate()
  useEffect(() => {
    refreshToken();
    refreshUserToken()
  }, []);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));


  return (
    <div>
    <button onClick={() => navigate('/')}>Home</button>
    <button onClick={() => navigate('/posts/')}>Jobs</button>
    {isRecruiterLogin() ? (
      <>
        {isUserLogin() ? (
          <>
          <button >Favorites vacancies</button>
          <button >User Logout</button>
          </>
        ) : (
          <>
          <button onClick={() => navigate('/post-create/')}>Create Post</button>
        <button onClick={() => navigate('/favorites')}>Favorites vacancies</button>
        <button onClick={() => navigate('/profile/req/')} >Recruiter Profile</button>
        <button onClick={() => { logout(); navigate('/'); }}> Recruiter Logout</button>
        <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
          </>
        ) }
        
      </>
    ) : (
      <>
        <button onClick={() => navigate('/account/rec-reg/')}>Register</button>
        <button onClick={() => navigate('/account/rec-log/')}>Login</button>
        <button onClick={() => navigate('/account/user-reg/')}> UserRegister</button>
        <button onClick={() => navigate('/account/user-log/')}>UserLogin</button>
      </>
    )}
  </div>
  )
}

export default Navbar