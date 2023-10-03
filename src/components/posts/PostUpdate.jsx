import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOnePost, updatePost } from "../../store/post/postAction";
import { clearOnePostState } from "../../store/post/postSlice";
import styles from "./postUpdate.module.css";

const PostUpdate = () => {
  const { onePost, loading } = useSelector((state) => state.posts);
  const [post, setPost] = useState(onePost);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOnePost({ id }));
    return () => dispatch(clearOnePostState());
  }, []);

  useEffect(() => {
    if (onePost) {
      setPost(onePost);
    }
  }, [onePost]);

  return (
	<div className={styles.main}>
    <div className={styles.container}>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          {post && (
            <div>
              <h3>Update Vacancy Post</h3>
              <input
                className={styles.inputField}
                type="text"
                placeholder="Company Name"
                value={post.company_name}
                onChange={(e) =>
                  setPost({ ...post, company_name: e.target.value })
                }
              />
              <input
                className={styles.inputField}
                type="text"
                placeholder="Vacancy"
                value={post.vacancy}
                onChange={(e) =>
                  setPost({ ...post, description: e.target.value })
                }
              />
              <input
                className={styles.inputField}
                type="text"
                placeholder="Experience"
                value={post.experience}
                onChange={(e) =>
                  setPost({ ...post, experience: e.target.value })
                }
              />
              <input
                className={styles.inputField}
                type="text"
                placeholder="Salary"
                value={post.salary}
                onChange={(e) => setPost({ ...post, salary: e.target.value })}
              />
              <input
                className={styles.inputField}
                type="text"
                placeholder="Description"
                value={post.description}
                onChange={(e) =>
                  setPost({ ...post, description: e.target.value })
                }
              />

              <button
                className={styles.button}
                onClick={() => dispatch(updatePost({ post, navigate }))}
              >
                Save new changes
              </button>
            </div>
          )}
        </div>
      )}
    </div>
	</div>
  );
};

export default PostUpdate;









// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getOnePost, updatePost } from "../../store/post/postAction";
// import { clearOnePostState } from "../../store/post/postSlice";

// const PostUpdate = () => {
// 	const { onePost, loading } = useSelector((state) => state.posts);
// 	const [post, setPost] = useState(onePost);
// 	const { id } = useParams();
// 	const navigate = useNavigate();
// 	const dispatch = useDispatch();

// 	useEffect(() => {
// 		dispatch(getOnePost({ id }));
// 		return () => dispatch(clearOnePostState());
// 	}, []);

// 	useEffect(() => {
// 		if (onePost) {
// 			setPost(onePost);
// 		}
// 	}, [onePost]);

// 	return (
// 		<div>
// 			{loading ? (
// 				<h3>Loading...</h3>
// 			) : (
// 				<div>
// 					{post && (
// 						<div>
// 							<h3>Update Vacancy Post</h3>
// 							<input
// 								type="text"
// 								placeholder="Company Name"
// 								value={post.company_name}
// 								onChange={(e) =>
// 									setPost({ ...post, company_name: e.target.value })
// 								}
// 							/>
// 							<input
// 								type="text"
// 								placeholder="Vacancy"
// 								value={post.vacancy}
// 								onChange={(e) =>
// 									setPost({ ...post, description: e.target.value })
// 								}
// 							/>
// 							<input
// 								type="text"
// 								placeholder="Experience"
// 								value={post.experience}
// 								onChange={(e) =>
// 									setPost({ ...post, experience: e.target.value })
// 								}
// 							/>
// 							<input
// 								type="text"
// 								placeholder="Salary"
// 								value={post.salary}
// 								onChange={(e) => setPost({ ...post, salary: e.target.value })}
// 							/>
// 							<input
// 								type="text"
// 								placeholder="Description"
// 								value={post.description}
// 								onChange={(e) =>
// 									setPost({ ...post, description: e.target.value })
// 								}
// 							/>

// 							<button onClick={() => dispatch(updatePost({ post, navigate }))}>
// 								Save new changes
// 							</button>
// 						</div>
// 					)}
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default PostUpdate;
