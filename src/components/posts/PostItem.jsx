import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../store/post/postAction';

const PostItem = ({post}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <div>
    <span onClick={() => navigate(`/post/${post.id}`)}>{ post.vacancy } </span>
    <span>{ post.companyName } </span>
    <span>${ post.salary } </span>
       {post.author && (
      <>
        <button onClick={() => navigate(`/post-update/${post.id}`)}>Update</button>
        <button onClick={() => dispatch(deletePost({ id: post.id }))}>Delete</button>
      </>
    )}
</div>
  )
}

export default PostItem