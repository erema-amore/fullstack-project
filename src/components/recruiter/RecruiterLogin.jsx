import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearStatus } from '../../store/recruiter/recruiterSlice';
import { useNavigate } from 'react-router-dom';
import { loginRecruiter } from '../../store/recruiter/recruiterAction';
import styles from './recruiterLogin.module.css';

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
    <div className={styles.main}>
      <h3>Post your jobs where millions of qualified technology professionals are searching.</h3>
    <div className={styles.container}>
      <h3 className={styles.heading}>Recruiter Вход</h3>
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
            onChange={(e) => setRecruiterObj({ ...recruiterObj, email: e.target.value})}
          />

          <input
            className={styles.inputField}
            type="password"
            minLength="6"
            placeholder="Пароль"
            onChange={(e) => setRecruiterObj({ ...recruiterObj, password: e.target.value})}
          />

          <button
            className={styles.button}
            onClick={() => dispatch(loginRecruiter({ recruiterObj, navigate }))}
          >
            Войти
          </button>
        </div>
      )}
    </div>
    </div>
  );
}

export default RecruiterLogin;





