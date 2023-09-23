import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import RecruiterLoginPage from "../pages/LoginPage/RecruiterLoginPage";
import RecruiterRegisterPage from "../pages/RegisterPage/RecruiterRegisterPage";
import UserLoginPage from "../pages/LoginPage/RecruiterLoginPage";
import UserRegisterPage from "../pages/RegisterPage/RecruiterRegisterPage";
import FavoritesPage from "../pages/postPage/FavoritesPage";
import PostDetailsPage from '../pages/postPage/PostDetailsPage'
import PostsListPage from '../pages/postPage/PostsListPage'
import PostUpdatePage from "../pages/postPage/PostUpdatePage";
import PostCreatePage from "../pages/postPage/PostCreatePage";
import RecruiterProfilePage from "../pages/profilePage/RecruiterProfilePage";
import UserProfilePage from "../pages/profilePage/UserProfilePage";
import PostListTest from '../components/posts/PostListTest'





const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites/" element={<FavoritesPage />} />
      <Route path="/account/user-reg/" element={<UserRegisterPage />} />
      <Route path="/account/user-log/" element={<UserLoginPage />} />
      <Route path="/profile/user/" element={<UserProfilePage />} />
      <Route path="/account/rec-reg/" element={<RecruiterRegisterPage />} />
      <Route path="/account/rec-log/" element={<RecruiterLoginPage />} />
      <Route path="/profile/req/" element={<RecruiterProfilePage />} />
      <Route path="/post-update/:id/" element={<PostUpdatePage />} />
      <Route path="/post/:id/" element={<PostDetailsPage />} />
      <Route path="/posts/" element={<PostsListPage/>} />
      <Route path="/post-create/" element={<PostCreatePage/>} />
      <Route path="/post-list/" element={<PostListTest/>} />
     
    </Routes>
  );  
};

export default MainRoutes;
