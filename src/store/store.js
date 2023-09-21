import { configureStore } from "@reduxjs/toolkit";
import recruiterReducer from './recruiter/recruiterSlice';
import postsReducer from './post/postSlice'

export default configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  }),
  reducer: {
    recruiter: recruiterReducer,
    posts: postsReducer
  }
})