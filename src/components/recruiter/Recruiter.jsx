import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './recruiter.module.css';

const Recruiter = () => {
    const navigate = useNavigate()
    return (
      <div className={styles.main}>
        <div className={styles.container}> 
        <div className={styles.block_btn}>
            <button className={styles.button} onClick={() => navigate('/account/rec-reg/')}>Recruiter Register</button>
            <button className={styles.button} onClick={() => navigate('/account/rec-log/')}>Recruiter Login</button>
        </div>
            <h3 className={styles.heading}>Find qualified technology candidates fast.</h3>
            <p className={styles.text}>
                To hire the best in tech, your jobs need to be where millions of tech professionals are searching.
                Source, connect with and win the engineers, developers, analysts and technicians you’re looking for with Dice, your essential tech hiring partner.
            </p>
        </div>
        </div>
    )
}

export default Recruiter;









