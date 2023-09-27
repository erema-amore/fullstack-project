import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import RecruiterLoginPage from "../pages/LoginPage/RecruiterLoginPage";
import RecruiterRegisterPage from "../pages/RegisterPage/RecruiterRegisterPage";
import UserLoginPage from "../pages/LoginPage/UserLoginPage";
import UserRegisterPage from "../pages/RegisterPage/UserRegisterPage";
import FavoritesPage from "../pages/postPage/FavoritesPage";
import PostDetailsPage from '../pages/postPage/PostDetailsPage'
import PostsListPage from '../pages/postPage/PostsListPage'
import PostUpdatePage from "../pages/postPage/PostUpdatePage";
import PostCreatePage from "../pages/postPage/PostCreatePage";
import RecruiterProfilePage from "../pages/profilePage/RecruiterProfilePage";
import RecruiterProfileUpdatePage from '../pages/profilePage/RecruiterProfileUpdatePage'
import RecruiterPage from "../pages/recruiterPage/RecruiterPage";
import UserProfilePage from "../pages/profilePage/UserProfilePage";
import UserProfileUpdatePage from "../pages/profilePage/UserProfileUpdatePage";
import PostListTest from '../components/posts/PostListTest'
import ForgotPasswordPage from "../pages/password/ForgotPasswordPage";
import AddNewPasswordPage from "../pages/password/AddNewPasswordPage"

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites/" element={<FavoritesPage />} />
      <Route path="/account/user-reg/" element={<UserRegisterPage />} />
      <Route path="/account/user-log/" element={<UserLoginPage />} />
      <Route path="/profile/user/" element={<UserProfilePage />} />
      <Route path="/profile-update/user/" element={<UserProfileUpdatePage />} />
      <Route path="/recruiter/" element={<RecruiterPage />} />
      <Route path="/account/rec-reg/" element={<RecruiterRegisterPage />} />
      <Route path="/account/rec-log/" element={<RecruiterLoginPage />} />
      <Route path="/profile/req/" element={<RecruiterProfilePage />} />
      <Route path="/profile-update/req/" element={<RecruiterProfileUpdatePage />} />
      <Route path="/post-update/:id/" element={<PostUpdatePage />} />
      <Route path="/post/:id/" element={<PostDetailsPage />} />
      <Route path="/posts/" element={<PostsListPage/>} />
      <Route path="/post-create/" element={<PostCreatePage/>} />
      <Route path="/post-list/" element={<PostListTest/>} />
      <Route path="/forgot-password/" element={<ForgotPasswordPage/>}/>
      <Route path="/new-password/" element={<AddNewPasswordPage/>}/>
     
    </Routes>
  );
};

export default MainRoutes;
