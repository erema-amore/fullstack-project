import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneRecruiter } from '../../store/recruiter/recruiterAction';


const RecriuterProfile = () => {
  const { loading, profile } = useSelector(state => state.recruiter);
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getOneRecruiter());
  }, []);

  return (
   <div>
        {loading ? (
            <h3>Loading...</h3>
        ) : (
            <>
                {profile ? (
                    <div>
                        {profile.map(profileObj => (
                            <div key={profileObj.id}>
                                <p>{profileObj.user}</p>
                                
                                
                            </div>
                        ))}
                    </div>
                ) : (
                    <h3>No favorites yet!</h3>
                )}
            </>
        )}
    </div>
  )
}

export default RecriuterProfile