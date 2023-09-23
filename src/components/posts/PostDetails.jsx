import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getOnePost,
  createReview,
  deleteReview,
  toggleFavorite,
} from "../../store/post/postAction";
import { clearOnePostState } from "../../store/post/postSlice";
import { isUserLogin } from "../../helpers/functions";

const PostDetails = () => {
  const { loading, onePost } = useSelector((state) => state.posts);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewContent, setReviewContent] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOnePost({ id }));
    return () => dispatch(clearOnePostState());
  }, []);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          {onePost && (
            <div>
              <h3>{onePost.companyName}</h3>
              <h3>{onePost.vacancy}</h3>
              <h3>{onePost.experience}</h3>
              <h3>{onePost.salary}</h3>
              <p>{onePost.description}</p>
              {isUserLogin() && (
                <button
                  onClick={() =>
                    dispatch(toggleFavorite({ postId: onePost.id }))
                  }
                >
                  {onePost.favorite
                    ? "Remove from favorites"
                    : "Add to favorites"}
                </button>
              )}
              <h3>Reviews:</h3>
              {isUserLogin() && (
                <button onClick={() => setShowReviewForm(!showReviewForm)}>
                  Add review
                </button>
              )}

              {showReviewForm && (
                <div>
                  <input
                    type="text"
                    placeholder="Enter review content"
                    value={reviewContent}
                    onChange={(e) => setReviewContent(e.target.value)}
                  />
                  <button
                    onClick={() => {
                      dispatch(
                        createReview({
                          text: reviewContent,
                          postId: onePost.id,
                        })
                      );
                      dispatch(getOnePost({ id: onePost.id }));
                      setReviewContent("");
                      setShowReviewForm(false);
                    }}
                  >
                    Add Comment
                  </button>
                </div>
              )}

              {onePost.reviews.length > 0 && (
                <>
                  {onePost.reviews.map((review) => (
                    <div key={review.id}>
                      {console.log(review.author)}
                      <span>{review.text} </span>
                      <span>{review.author} </span>
                      {review.is_author && (
                        <button
                          onClick={() => {
                            dispatch(
                              deleteReview({
                                reviewId: review.id,
                                postId: onePost.id,
                              })
                            );
                          }}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PostDetails;
