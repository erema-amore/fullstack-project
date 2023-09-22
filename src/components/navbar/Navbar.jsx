import React, {useEffect} from 'react'
import { refreshToken, logout, isUserLogin } from '../../helpers/functions'
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
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
    {isUserLogin() ? (
      <>
      <button onClick={() => navigate('/posts/')}>Posts</button>
        <button onClick={() => navigate('/post-create/')}>Create Post</button>
        <button onClick={() => navigate('/favorites')}>Favorites vacancies</button>
        <button onClick={() => {
          logout();
          navigate('/');
        }}>Logout</button>
        <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
      </>
    ) : (
      <>
        <button onClick={() => navigate('/account/rec-reg/')}>Register</button>
        <button onClick={() => navigate('/account/rec-log/')}>Login</button>
      </>
    )}
  </div>
  )
}

export default Navbar