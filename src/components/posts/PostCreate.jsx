import React, { useState, useEffect } from "react";
import { createPost, getCategories } from "../../store/post/postAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PostCreate = () => {
  const [post, setPost] = useState({
    companyName: "",
    vacancy: "",
    experience: "",
    salary: "",
    description: "",
  });
  const { categories } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div>
      <h3>Create Post</h3>
      <input
        type="text"
        placeholder="Company Name"
        onChange={(e) => setPost({ ...post, companyName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Vacancy"
        onChange={(e) => setPost({ ...post, vacancy: e.target.value })}
      />
      <input
        type="text"
        placeholder="Experience"
        value={post.experience}
        onChange={(e) => setPost({ ...post, experience: e.target.value })}
      />
      <input
        type="text"
        placeholder="Salary"
        value={post.salary}
        onChange={(e) => setPost({ ...post, salary: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={post.description}
        onChange={(e) => setPost({ ...post, description: e.target.value })}
      />

      <button onClick={() => dispatch(createPost({ post, navigate }))}>
        Create Post
      </button>
    </div>
  );
};

export default PostCreate;
