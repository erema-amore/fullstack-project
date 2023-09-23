import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearStatus } from '../../store/recruiter/recruiterSlice';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../store/user/userAction';
import styles from './recruiterLogin.module.css';

const UserLogin = () => {
  const [userObj, setUserObj] = useState({
    email: '',
    password: ''
  });
  const { status } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearStatus());
  }, []);

  return (
    <div className={styles.main}>
    <div className={styles.container}>
      <h3 className={styles.heading}>Вход</h3>
      {status === 'error' ? (
        <>
          <h3 className={styles.errorMessage}>Произошла ошибка! Пожалуйста, попробуйте снова.</h3>
          <button className={styles.button} onClick={() => dispatch(clearStatus())}>Попробовать снова</button>
        </>
      ) : (
        <div>
          <input
            className={styles.inputField}
            type="email"
            placeholder="Электронная почта"
            onChange={(e) => setUserObj({ ...userObj, email: e.target.value})}
          />

          <input
            className={styles.inputField}
            type="password"
            minLength="6"
            placeholder="Пароль"
            onChange={(e) => setUserObj({ ...userObj, password: e.target.value})}
          />

          <button
            className={styles.button}
            onClick={() => dispatch(loginUser({ userObj, navigate }))}
          >
            Войти
          </button>
        </div>
      )}
    </div>
    </div>
  );
}

export default UserLogin