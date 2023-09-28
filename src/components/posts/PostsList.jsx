import React, { useEffect } from "react";
import { getFavorites, getPosts } from "../../store/post/postAction";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "./PostItem";
import "./postsList.css";
import { Box, Pagination } from "@mui/material";
import { changePage } from "../../store/post/postSlice";

const PostsList = () => {
	const { posts, loading, currentPage, totalPages } = useSelector(
		(state) => state.posts
	);

	const { favorites } = useSelector((state) => state.posts);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
		dispatch(getFavorites());
	}, [currentPage]);

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
									<PostItem key={post.pk} favorites={favorites} post={post} />
								))}
							</div>
						)}
					</div>
				</div>
				<Box
					sx={{ width: "max-content", margin: "0 auto", paddingBottom: "15px" }}
				>
					<Pagination
						count={totalPages}
						page={currentPage}
						onChange={(_, page) => dispatch(changePage({ page }))}
					/>
				</Box>
			</div>
		</div>
	);
};

export default PostsList;
