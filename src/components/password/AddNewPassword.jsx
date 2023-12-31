import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearStatus } from '../../store/user/userSlice';
import { changeNewPassword } from '../../store/user/userAction';
import styles from './addNewPassword.module.css'; 

const AddNewPassword = () => {
  const [userObj, setUserObj] = useState({
    email: '',
    code: '',
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
    <div className={styles.main}>
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div>
          <h3>USER Регистрация</h3>
          {status === 'error' ? (
            <>
              <h3 className={styles.errorMsg}>Произошла ошибка, попробуйте еще раз!</h3>
              <button className={styles.button} onClick={() => dispatch(clearStatus())}>Попробовать снова</button>
            </>
          ) : (
            <div>
              <input
                className={styles.inputField}
                type="email"
                placeholder="Email"
                onChange={(e) => setUserObj({ ...userObj, email: e.target.value})}
              />

              <input
                className={styles.inputField}
                type="password"
                placeholder="Verification Code"
                onChange={(e) => setUserObj({ ...userObj, code: e.target.value})}
              />

              <input
                className={styles.inputField}
                type="password"
                minLength="6"
                placeholder="Пароль"
                onChange={(e) => setUserObj({ ...userObj, password: e.target.value})}
              />

              <input
                className={styles.inputField}
                type="password"
                minLength="6"
                placeholder="Подтвердите пароль"
                onChange={(e) => setUserObj({ ...userObj, passwordConfirm: e.target.value})}
              />

              <button
                className={styles.button}
                onClick={() => dispatch(changeNewPassword({ userObj, navigate }))}
              >
                Change to new password
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default AddNewPassword;








