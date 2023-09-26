import React, { useState, useEffect } from 'react';
import { updateUserProfile, getOneUser } from '../../store/user/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './userProfileUpdate.module.css'; 

const UserProfileUpdate = () => {
  const { profile } = useSelector(state => state.user);
  const [editProfile, setEditProfile] = useState(profile);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(getOneUser());
  }, []);

  useEffect(() => {
    if (editProfile) {
      setEditProfile(editProfile);
    }
  }, [editProfile]);


  return (

    <div className={styles.main}>
    <div className={styles.container}>
      {profile && (
        <>
          <h3 className={styles.heading}>Update Your Profile</h3>
          <p className={styles.uploadLabel}>Upload your profile image</p>
          <input type="file" accept="image/*" onChange={(e) => setEditProfile({ ...editProfile, image: e.target.files[0] })} className={styles.inputField} />
          <input type="text" placeholder="Name" value={editProfile.name} onChange={(e) => setEditProfile({ ...editProfile, name: e.target.value })} className={styles.inputField} />
          <input type="text" placeholder="Surname" value={editProfile.surname} onChange={(e) => setEditProfile({ ...editProfile, surname: e.target.value })} className={styles.inputField} />
          <input type="email" placeholder="Contact email" value={editProfile.email} onChange={(e) => setEditProfile({ ...editProfile, email: e.target.value })} className={styles.inputField} />
          <input type="text" placeholder="Summary" value={editProfile.about_user} onChange={(e) => setEditProfile({ ...editProfile, about_user: e.target.value })} className={styles.inputField} />
          <p className={styles.uploadLabel}>Upload your resume in PDF</p>
          <input type="file" accept=".pdf" onChange={(e) => setEditProfile({ ...editProfile, user_resume: e.target.files[0] })} className={styles.inputField} />
          <button className={styles.button} onClick={() => dispatch(updateUserProfile({ editProfile, navigate }))}>Save profile changes</button>
        </>
      )}
    </div>
    </div>

  )
}

export default UserProfileUpdate;








