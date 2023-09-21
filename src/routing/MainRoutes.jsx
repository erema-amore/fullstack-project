import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import RecruiterLoginPage from "../pages/LoginPage/RecruiterLoginPage";
import RecruiterRegisterPage from "../pages/RegisterPage/RecruiterRegisterPage";
import PostDetailsPage from '../pages/postPage/PostDetailsPage'
import PostsListPage from '../pages/postPage/PostsListPage'
import PostUpdatePage from "../pages/postPage/PostUpdatePage";
import PostCreatePage from "../pages/postPage/PostCreatePage";



const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/account/recruter-register/" element={<RecruiterRegisterPage />} />
      <Route path="/account/recruter-login/" element={<RecruiterLoginPage />} />
      <Route path="/post-update/:id/" element={<PostUpdatePage />} />
      <Route path="/post/:id/" element={<PostDetailsPage />} />
      <Route path="/posts/" element={<PostsListPage/>} />
      <Route path="/post-create/" element={<PostCreatePage/>} />
    </Routes>
  );  
};

export default MainRoutes;
