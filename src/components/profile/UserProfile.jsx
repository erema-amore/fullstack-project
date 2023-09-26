import React, { useEffect }from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { getOneUser } from '../../store/user/userAction';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const { profile } = useSelector(state => state.user)
console.log(profile);

const dispatch = useDispatch()
const navigate = useNavigate()

useEffect(() => {
  dispatch(getOneUser());
}, []);

  return (
    <div>
  <img src={profile.image} alt={profile.name} width="50" height="50" />
  <h3>User Name: {profile.name}</h3>
  <h4>User Surname: {profile.surname}</h4>
  <h4>User contact email: {profile.email}</h4>
  <h4>Summery/objectives: {profile.about_user}</h4>
  <iframe src={profile.user_resume} width="50%" height="250px"></iframe>
  <button onClick={() => navigate("/profile-update/user/") }>Update Profile</button>

    </div>
  )
}

export default UserProfile