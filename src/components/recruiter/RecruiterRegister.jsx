import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearStatus } from '../../store/recruiter/recruiterSlice';
import { registerRecruiter } from '../../store/recruiter/recruiterAction';
import styles from './recruiterRegister.module.css'; 
import cosmos from '../../img/Recruiter/RecruiterLogin/cosmos.svg'
import rupor from '../../img/Recruiter/RecruiterLogin/rupor.svg'
import paper from '../../img/Recruiter/RecruiterLogin/paper.svg'


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
        <div className={styles.block_1_main}>
       <div className={styles.block_1}>  
          <p className={styles.block_1_txt_1}>Post your jobs where millions of qualified technology professionals are searching.</p>
          <p className={styles.block_1_txt_2}>Dice is a hiring platform that only does tech. If you’re hiring engineers, developers, analysts or technicians, you need to be on Dice.</p>
        </div>
        </div>
        <div className={styles.block_2_main}>
        <div className={styles.block_2}>

          <div className={styles.block_2_first}>

          <div className={styles.block_2_first_main}>
            <div> <img className={styles.block_2_main_img} src={ cosmos } alt="cosmos" /> </div>
            <div>
              <p className={styles.block_2_main_txt_1}>Fill tech jobs fast</p>
              <p className={styles.block_2_main_txt_2}>The Dice community is expansive, diverse and growing.</p>
              <p className={styles.block_2_main_txt_2}>• Over 5.9M Dice Members</p>
              <p className={styles.block_2_main_txt_2}>• 49K new members per month</p>
            </div>
          </div>

          <div className={styles.block_2_first_main}>
            <div> <img className={styles.block_2_main_img} src={ rupor } alt="cosmos" /> </div>
            <div>
              <p className={styles.block_2_main_txt_1}>Access tech talent you can't find anywhere else</p>
              <p className={styles.block_2_main_txt_2}>83% of active tech professionals on Dice aren’t actively searching for jobs on Indeed, ZipRecruiter, Career Builder & Monster.</p>
              
            </div>
          </div>

          <div className={styles.block_2_first_main}>
            <div> <img className={styles.block_2_main_img}  src={ paper } alt="cosmos" /> </div>
            <div>
              <p className={styles.block_2_main_txt_1}>More qualified applicants for each jobt</p>
              <p className={styles.block_2_main_txt_2}>715K job applications per month are submitted on Dice.</p>
             
            </div>
          </div>
          </div>
      
    <div className={styles.container}>
      <h3 className={styles.heading}>Регистрация</h3>
      {status === 'error' ? (
        <>
          <h3 className={styles.errorMessage}>Произошла ошибка, попробуйте еще раз!</h3>
          <button className={styles.button} onClick={() => dispatch(clearStatus())}>Попробовать снова</button>
        </>
      ) : (
        
        <div>
        
      

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

        

        </div>

       

      )}
    </div>
    </div>
    </div>
    </div>
  );
}

export default RecruiterRegister;






