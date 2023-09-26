import React, { useEffect}from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { getOneUser } from '../../store/user/userAction';
import { useNavigate } from 'react-router-dom';
import styles from './userProfile.module.css'; 

const UserProfile = () => {

  const { profile } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    dispatch(getOneUser());
  }, []);

const fileName = profile.user_resume ? profile.user_resume.split('/').pop() : "";

  return (

    <div className={styles.main}>
    <div className={styles.container}> 
      <img className={styles.profileImage} src={`http://35.224.14.145${profile.image}`} alt={profile.name} width="50" height="50" />
      <h3 className={styles.heading}>User Name: {profile.name}</h3>
      <h4 className={styles.userInfo}>User Surname: {profile.surname}</h4>
      <h4 className={styles.userInfo}>User contact email: {profile.email}</h4>
      <h4 className={styles.userInfo}>Summary/objectives: {profile.about_user}</h4>
      <h4 className={styles.userInfo}>Resume: {fileName}</h4>
      {/* <iframe className={styles.resumeFrame} src={profile.user_resume} width="100%" height="250px"></iframe> */}
      <button className={styles.updateButton} onClick={() => navigate("/profile-update/user/") }>Update Profile</button>
    </div>

    </div>
  )
}

export default UserProfile;










// import React, { useEffect }from 'react'
// import { useDispatch, useSelector} from 'react-redux';
// import { getOneUser } from '../../store/user/userAction';
// import { useNavigate } from 'react-router-dom';

// const UserProfile = () => {
//   const { profile } = useSelector(state => state.user)
// console.log(profile);




// const dispatch = useDispatch()
// const navigate = useNavigate()

// useEffect(() => {
//   dispatch(getOneUser());
// }, []);

//   return (
//     <div>
//   <img src={profile.image} alt={profile.name} width="50" height="50" />
//   <h3>User Name: {profile.name}</h3>
//   <h4>User Surname: {profile.surname}</h4>
//   <h4>User contact email: {profile.email}</h4>
//   <h4>Summery/objectives: {profile.about_user}</h4>
//   <iframe src={profile.user_resume} width="50%" height="250px"></iframe>
//   <button onClick={() => navigate("/profile-update/user/") }>Update Profile</button>

//     </div>
//   )
// }

// export default UserProfile