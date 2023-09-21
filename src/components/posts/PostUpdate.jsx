import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getOnePost, updatePost } from '../../store/post/postAction';
import { clearOnePostState } from '../../store/post/postSlice';

const PostUpdate = () => {
  const { onePost, loading, categories } = useSelector(state => state.posts);
  const [post, setPost] = useState(onePost);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getOnePost({ id }));
    return () => dispatch(clearOnePostState());
  }, []);

  useEffect(() => {
    if(onePost) {
      setPost({ ...onePost, category: onePost.category.id });
    };
  }, [onePost]);


  return (
   <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          {post && (
            <div>
              <h3>Update Vacancy Post</h3>
              <input type="text" placeholder="Company Name" value={post.companyName} onChange={(e) => setPost({ ...post, companyName: e.target.value })} />
              <input type="text" placeholder="Vacancy" value={post.vacancy} onChange={(e) => setPost({ ...post, description: e.target.value })} />
              <input type="text" placeholder="Experience" value={post.experience} onChange={(e) => setPost({ ...post, experience: e.target.value })} />
              <input type="text" placeholder="Salary" value={post.salary} onChange={(e) => setPost({ ...post, salary: e.target.value })} />
              <input type="text" placeholder="Description" value={post.description} onChange={(e) => setPost({ ...post, description: e.target.value })} />
              
              <button onClick={() => dispatch(updatePost({ post, navigate }))}>Save new changes</button>
              </div>
          )}
        </div>
      )}
    </div>
  )
}

export default PostUpdate