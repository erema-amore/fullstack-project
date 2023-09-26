import React from 'react'
import { useNavigate } from 'react-router-dom'

const Recruiter = () => {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={() => navigate('/account/rec-reg/')}>Recruiter Register</button>
        <button onClick={() => navigate('/account/rec-log/')}>Recruiter Login</button>
        <h3>Find qualified technology candidates fast.</h3>
        <p>To hire the best in tech, your jobs need to be where millions of tech professionals are searching. Source, connect with and win the engineers, developers, analysts and technicians you’re looking for with Dice, your essential tech hiring partner. </p>

    </div>
  )
}

export default Recruiter