import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getOneRecruiter } from '../../store/recruiter/recruiterAction';
import { useNavigate } from 'react-router-dom';


const RecriuterProfile = () => {
const { profile } = useSelector(state => state.recruiter)
console.log(profile);
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
      dispatch(getOneRecruiter());
  }, []);
  return (
 <div>
  <h3>Company: {profile.company_name}</h3>
  <h4>Location: {profile.location}</h4>
  <h4>Company size: {profile.amount_of_emplyees}</h4>
  <h4>Company contact: {profile.company_phone}</h4>
  <h5>About Company : <br /> {profile.about_company}</h5>
  <button onClick={() => navigate("/profile-update/req/") }>Update Profile</button>
 </div>
  )
}

export default RecriuterProfile