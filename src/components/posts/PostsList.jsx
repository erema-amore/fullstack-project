import React, { useEffect } from 'react';
import { getPosts } from '../../store/post/postAction';
import { useDispatch, useSelector } from 'react-redux';
import PostItem from './PostItem';

const PostsList = () => {
  const { posts, loading } = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className='postCard'>
          {posts.map(post => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}

export default PostsList