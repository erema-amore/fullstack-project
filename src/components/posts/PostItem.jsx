import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../store/post/postAction';

const PostItem = ({post}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
    <span>{ post.vacancy } </span>
    <span>{ post.companyName } </span>
    <span>${ post.salary } </span>
    <button>Add Favorites</button>
    <button>Add Comment</button>
    {post.is_author && (
      <>
        <button onClick={() => navigate(`/post-update/${post.id}`)}>Update</button>
        <button onClick={() => dispatch(deletePost({ id: post.id }))}>Delete</button>
      </>
    )}
</div>
  )
}

export default PostItem