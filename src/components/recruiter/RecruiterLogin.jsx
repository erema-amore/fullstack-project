import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearStatus } from '../../store/recruiter/recruiterSlice';
import { useNavigate } from 'react-router-dom';
import { loginRecruiter } from '../../store/recruiter/recruiterAction';


const RecruiterLogin = () => {
  const [recruiterObj, setRecruiterObj] = useState({
    email: '',
    password: ''
  });
  const { status } = useSelector(state => state.recruiter);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearStatus());
  }, []);


  return (
    <div>
      <h3>Login</h3>
      {status === 'error' ? (
        <>
          <h3>Some error ! Please TRY AGAIN</h3>
          <button onClick={() => dispatch(clearStatus())}>Try again</button>
        </>
      ) : (
        <div>
          <input type="email" placeholder="Email" onChange={(e) => setRecruiterObj({ ...recruiterObj, email: e.target.value})} />

          <input type="password" minLength="6" placeholder="Password" onChange={(e) => setRecruiterObj({ ...recruiterObj, password: e.target.value})} />

          <button onClick={() => dispatch(loginRecruiter({ recruiterObj, navigate }))}>Login</button>
        </div>
      )}
    </div>
  )
}

export default RecruiterLogin