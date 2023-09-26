import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearStatus } from '../../store/recruiter/recruiterSlice';
import { useNavigate } from 'react-router-dom';
import { forgotPassword } from '../../store/user/userAction';

const ForgotPassword = () => {
    const [userObj, setUserObj] = useState({
        email: ''
      });
      const { status } = useSelector(state => state.user);
      const dispatch = useDispatch();
      const navigate = useNavigate();
    
      useEffect(() => {
        dispatch(clearStatus());
      }, []);
    
  return (
    <div >
    <div >
      <div>
        <h3 >USER</h3>
        {status === 'error' ? (
          <>
            <h3 >Произошла ошибка! Пожалуйста, попробуйте снова.</h3>
            <button  onClick={() => dispatch(clearStatus())}>Попробовать снова</button>
          </>
        ) : (
          <div>
            <input
             
              type="email"
              placeholder="Электронная почта"
              onChange={(e) => setUserObj({ ...userObj, email: e.target.value})}
            />

            <button
              
              onClick={() => dispatch(forgotPassword({ userObj, navigate }))}
            >
              Forgot Password
            </button>
          </div>
        )}
      </div>
    </div>
    </div>
    
  )
}

export default ForgotPassword