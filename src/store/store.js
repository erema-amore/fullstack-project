import { configureStore } from "@reduxjs/toolkit";
import recruiterReducer from './recruiter/recruiterSlice';

export default configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  }),
  reducer: {
    recruiter: recruiterReducer
  }
})