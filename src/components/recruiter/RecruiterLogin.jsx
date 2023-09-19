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









// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { clearStatus } from '../../store/recruiter/recruiterSlice';
// import { useNavigate } from 'react-router-dom';
// import { loginRecruiter } from '../../store/recruiter/recruiterAction';


// const RecruiterLogin = () => {
//   const [recruiterObj, setRecruiterObj] = useState({
//     email: '',
//     password: ''
//   });
//   const { status } = useSelector(state => state.recruiter);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(clearStatus());
//   }, []);


//   return (
//     <div>
//       <h3>Login</h3>
//       {status === 'error' ? (
//         <>
//           <h3>Some error ! Please TRY AGAIN</h3>
//           <button onClick={() => dispatch(clearStatus())}>Try again</button>
//         </>
//       ) : (
//         <div>
//           <input type="email" placeholder="Email" onChange={(e) => setRecruiterObj({ ...recruiterObj, email: e.target.value})} />

//           <input type="password" minLength="6" placeholder="Password" onChange={(e) => setRecruiterObj({ ...recruiterObj, password: e.target.value})} />

//           <button onClick={() => dispatch(loginRecruiter({ recruiterObj, navigate }))}>Login</button>
//         </div>
//       )}
//     </div>
//   )
// }

// export default RecruiterLogin