import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearStatus } from '../../store/user/userSlice';
import { registerUser } from '../../store/user/userAction';


const UserRegister = () => {
  const [userObj, setUserObj] = useState({
    email: '',
    password: '',
    passwordConfirm: ''
  });
  const { status } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearStatus());
  }, [dispatch]);

  return (
    <div>
    <div >
      <h3 >USER Регистрация</h3>
      {status === 'error' ? (
        <>
          <h3 >Произошла ошибка, попробуйте еще раз!</h3>
          <button  onClick={() => dispatch(clearStatus())}>Попробовать снова</button>
        </>
      ) : (
        <div>
          <input type="email" 
           placeholder="Email" 
           onChange={(e) => setUserObj({ ...userObj, email: e.target.value})} />


          <input
            
            type="password"
            minLength="6"
            placeholder="Пароль"
            onChange={(e) => setUserObj({ ...userObj, password: e.target.value})}
          />

          <input
            
            type="password"
            minLength="6"
            placeholder="Подтвердите пароль"
            onChange={(e) => setUserObj({ ...userObj, passwordConfirm: e.target.value})}
          />

          <button onClick={() => dispatch(registerUser({ userObj, navigate }))} >
            Зарегистрироваться
          </button>
        </div>
      )}
    </div>
    </div>
  );
}

export default UserRegister