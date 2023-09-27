import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearStatus } from '../../store/recruiter/recruiterSlice';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../store/user/userAction';
import styles from './userLogin.module.css'; 

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
      <div>
        <h3 className={styles.heading}>USER</h3>
        {status === 'error' ? (
          <>
            <h3 className={styles.errorMsg}>Произошла ошибка! Пожалуйста, попробуйте снова.</h3>
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
            <div className={styles.button_main}>
            <button
              className={styles.button}
              onClick={() => dispatch(loginUser({ userObj, navigate }))}
            >
              Войти
            </button>
            <button
            className={styles.button}  
            onClick={() => navigate('/forgot-password/')}>Forgot password ?</button>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default UserLogin;









// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { clearStatus } from '../../store/recruiter/recruiterSlice';
// import { useNavigate } from 'react-router-dom';
// import { loginUser } from '../../store/user/userAction';


// const UserLogin = () => {
//   const [userObj, setUserObj] = useState({
//     email: '',
//     password: ''
//   });
//   const { status } = useSelector(state => state.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(clearStatus());
//   }, []);

//   return (
//     <div >
//     <div >
//       <h3 >USER</h3>
//       {status === 'error' ? (
//         <>
//           <h3 >Произошла ошибка! Пожалуйста, попробуйте снова.</h3>
//           <button onClick={() => dispatch(clearStatus())}>Попробовать снова</button>
//         </>
//       ) : (
//         <div>
//           <input
            
//             type="email"
//             placeholder="Электронная почта"
//             onChange={(e) => setUserObj({ ...userObj, email: e.target.value})}
//           />

//           <input
            
//             type="password"
//             minLength="6"
//             placeholder="Пароль"
//             onChange={(e) => setUserObj({ ...userObj, password: e.target.value})}
//           />

//           <button
            
//             onClick={() => dispatch(loginUser({ userObj, navigate }))}
//           >
//             Войти
//           </button>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// }

// export default UserLogin