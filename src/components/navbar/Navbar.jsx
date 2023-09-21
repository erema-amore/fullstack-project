import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { refreshToken, logout, isUserLogin } from '../../helpers/functions'

const Navbar = () => {
  const navigate = useNavigate()

  useEffect(() => {
    refreshToken();
  }, []);

  return <div>
    <>
    {isUserLogin? (<button onClick={() => {
            logout();
            navigate('/');
          }}>logout</button>) : (<button>Register</button>)}
    </>
    </div>;
};

export default Navbar;
