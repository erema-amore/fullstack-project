import React, { useEffect } from "react";
import { getFavorites, getPosts } from "../../store/post/postAction";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "./PostItem";
import "./postsList.css";

const PostsList = () => {
  const { posts, loading } = useSelector((state) => state.posts);
  // console.log(posts);

  const { favorites } = useSelector((state) => state.posts.favorites);
  console.log(favorites);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div id="posts-list">
      <div className="posts-list__container">
        <div className="category__container"></div>
        <div className="posts__container">
          <div>
            {loading ? (
              <h3>Loading...</h3>
            ) : (
              <div className="postCard">
                {posts.map((post) => (
                  <PostItem key={post.id} favorites={favorites} post={post} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsList;
