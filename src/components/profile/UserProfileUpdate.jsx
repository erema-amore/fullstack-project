import React, {useState, useEffect} from 'react'
import {updateUserProfile,  getOneUser} from '../../store/user/userAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const UserProfileUpdate = () => {
  const {profile} = useSelector(state => state.user)
  const [editProfile, setEditProfile] = useState(profile);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(editProfile);

  useEffect(() => {
    dispatch(getOneUser());
}, []);

useEffect(() => {
  if (editProfile) {
    setEditProfile(editProfile);
  }
}, [editProfile]);

  return (
    <div>
    {profile && (
      <>
      <h3>Update Your Profile</h3>
           <p>upload your profile image</p>
            <input type="file" accept="image/*" onChange={(e) => setEditProfile({ ...editProfile, image: e.target.files[0] })} />

            <input type="text" placeholder="Name" value={editProfile.name} onChange={(e) => setEditProfile({ ...editProfile, name: e.target.value })} />

            <input type="text" placeholder="Surname" value={editProfile.surname} onChange={(e) => setEditProfile({ ...editProfile, surname: e.target.value })} />

            <input type="email" placeholder="Contact email" value={editProfile.email} onChange={(e) => setEditProfile({ ...editProfile, email: e.target.value })} />
           
            <input type="text" placeholder="Summery" value={editProfile.about_user} onChange={(e) => setEditProfile({ ...editProfile, about_user: e.target.value })} />

            <p>upload your resume in pdf</p>
            <input type="file" accept=".pdf" placeholder="Resume" onChange={(e) => setEditProfile({ ...editProfile, user_resume: e.target.files[0] })} />
            
            <button onClick={() => dispatch(updateUserProfile({ editProfile, navigate }))}>Save profile changes</button>
      </>
    )}
  </div>
  )
}

export default UserProfileUpdate