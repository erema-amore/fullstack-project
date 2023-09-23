import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getOneRecruiter } from '../../store/recruiter/recruiterAction';


const RecriuterProfile = () => {
  const dispatch = useDispatch()

 

  useEffect(() => {
      dispatch(getOneRecruiter());
  }, []);

  return (
   <div>
  
   </div>
  )
}

export default RecriuterProfile