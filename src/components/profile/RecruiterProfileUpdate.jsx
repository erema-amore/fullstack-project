import React, {useState, useEffect} from 'react'
import {updateRecruiterProfile,  getOneRecruiter} from '../../store/recruiter/recruiterAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const RecruiterProfileUpdate = () => {
  const {profile} = useSelector(state => state.recruiter)
  const [editProfile, setEditProfile] = useState(profile);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(editProfile);

  useEffect(() => {
    dispatch(getOneRecruiter());
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
              <input type="text" placeholder="Company Name" value={editProfile.company_name} onChange={(e) => setEditProfile({ ...editProfile, company_name: e.target.value })} />

              <input type="text" placeholder="Location" value={editProfile.location} onChange={(e) => setEditProfile({ ...editProfile, location: e.target.value })} />

              <input type="number" placeholder="Company size" value={editProfile.amount_of_emplyees} onChange={(e) => setEditProfile({ ...editProfile, amount_of_emplyees: e.target.value })} />

              <input type="number" placeholder="Contact Number" value={editProfile.company_phone} onChange={(e) => setEditProfile({ ...editProfile, company_phone: e.target.value })} />

              <input type="text" placeholder="About company" value={editProfile.about_company} onChange={(e) => setEditProfile({ ...editProfile, about_company: e.target.value })} />
              
              <button onClick={() => dispatch(updateRecruiterProfile({ editProfile, navigate }))}>Save profile changes</button>
        </>
      )}
    </div>
  )
}

export default RecruiterProfileUpdate