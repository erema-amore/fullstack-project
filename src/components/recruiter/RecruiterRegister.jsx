import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearStatus } from '../../store/recruiter/recruiterSlice';
import { registerRecruiter } from '../../store/recruiter/recruiterAction';
import styles from './recruiterRegister.module.css'; 


const RecruiterRegister = () => {
  const [recruiterObj, setRecruiterObj] = useState({
    email: '',
    password: '',
    passwordConfirm: ''
  });
  const { status } = useSelector(state => state.recruiter);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearStatus());
  }, [dispatch]);

  return (
    <div className={styles.main}>
      
    <div className={styles.container}>
      <h3 className={styles.heading}> Recruiter Регистрация</h3>
      {status === 'error' ? (
        <>
          <h3 className={styles.errorMessage}>Произошла ошибка, попробуйте еще раз!</h3>
          <button className={styles.button} onClick={() => dispatch(clearStatus())}>Попробовать снова</button>
        </>
      ) : (
        <div>

          
          <input type="email" 
           className={styles.inputField}
           placeholder="Email" 
           onChange={(e) => setRecruiterObj({ ...recruiterObj, email: e.target.value})} />


          <input
            className={styles.inputField}
            type="password"
            minLength="6"
            placeholder="Пароль"
            onChange={(e) => setRecruiterObj({ ...recruiterObj, password: e.target.value})}
          />

          <input
            className={styles.inputField}
            type="password"
            minLength="6"
            placeholder="Подтвердите пароль"
            onChange={(e) => setRecruiterObj({ ...recruiterObj, passwordConfirm: e.target.value})}
          />

          <button
            className={styles.button}
            onClick={() => dispatch(registerRecruiter({ recruiterObj, navigate }))}
          >
            Зарегистрироваться
          </button>
        </div>
      )}
    </div>
    </div>
  );
}

export default RecruiterRegister;






