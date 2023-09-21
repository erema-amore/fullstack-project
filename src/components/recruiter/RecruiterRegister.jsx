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
    passwordConfirm: '',
    companyName: '',
    employeePosition: '',
    country: '',
    companyId: '',
    companyPhone: ''
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
      <h3 className={styles.heading}>Регистрация</h3>
      {status === 'error' ? (
        <>
          <h3 className={styles.errorMessage}>Произошла ошибка, попробуйте еще раз!</h3>
          <button className={styles.button} onClick={() => dispatch(clearStatus())}>Попробовать снова</button>
        </>
      ) : (
        <div>

          
          <input type="email" placeholder="Email" onChange={(e) => setRecruiterObj({ ...recruiterObj, email: e.target.value})} />


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

          <input
            className={styles.inputField}
            type="text"
            minLength="6"
            placeholder="Название компании"
            onChange={(e) => setRecruiterObj({ ...recruiterObj, companyName: e.target.value})}
          />

          <input
            className={styles.inputField}
            type="text"
            minLength="6"
            placeholder="Должность сотрудника/Отдел"
            onChange={(e) => setRecruiterObj({ ...recruiterObj, employeePosition: e.target.value})}
          />

          <input
            className={styles.inputField}
            type="text"
            minLength="6"
            placeholder="Страна головного офиса"
            onChange={(e) => setRecruiterObj({ ...recruiterObj, country: e.target.value})}
          />

          <input
            className={styles.inputField}
            type="text"
            minLength="6"
            placeholder="Идентификатор компании"
            onChange={(e) => setRecruiterObj({ ...recruiterObj, companyId: e.target.value})}
          />

          <input
            className={styles.inputField}
            type="text"
            minLength="6"
            placeholder="Контактный номер компании"
            onChange={(e) => setRecruiterObj({ ...recruiterObj, companyPhone: e.target.value})}
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






