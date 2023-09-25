import { configureStore } from "@reduxjs/toolkit";

import recruiterReducer from "./recruiter/recruiterSlice";
import userReducer from "./user/userSlice";
import postsReducer from "./post/postSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    recruiter: recruiterReducer,

    user: userReducer,
    posts: postsReducer,
  },
});
