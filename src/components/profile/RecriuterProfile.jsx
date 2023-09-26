
import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getOneRecruiter } from '../../store/recruiter/recruiterAction';
import { useNavigate } from 'react-router-dom';
import styles from './recriuterProfile.module.css'; 

const RecriuterProfile = () => {
  const { profile } = useSelector(state => state.recruiter);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOneRecruiter());
  }, []);

  return (
    <div className={styles.main}>
    <div className={styles.container}>
      <h3 className={styles.heading}>Company: {profile.company_name}</h3>
      <h4 className={styles.info}>Location: {profile.location}</h4>
      <h4 className={styles.info}>Company size: {profile.amount_of_emplyees}</h4>
      <h4 className={styles.info}>Company contact: {profile.company_phone}</h4>
      <h5 className={styles.about}>About Company : <br /> {profile.about_company}</h5>
      <button className={styles.button} onClick={() => navigate("/profile-update/req/") }>Update Profile</button>
    </div>
    </div>
  )
}

export default RecriuterProfile;





