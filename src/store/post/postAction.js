import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API } from "../../helpers/consts";
import { getAuthConfig } from "../../helpers/functions";

export const getPosts = createAsyncThunk(
	"posts/getPosts",
	async (_, { getState }) => {
		const { currentPage } = getState().posts;
		const config = getAuthConfig();
		const { data } = await axios.get(
			`${API}/posts/?page=${currentPage}`,
			config ? config : null
		);
		return data;
	}
);

export const getOnePost = createAsyncThunk(
	"posts/getOnePost",
	async ({ id }) => {
		const config = getAuthConfig();
		const { data } = await axios.get(
			`${API}/posts/${id}/`,
			config ? config : null
		);
		return data;
	}
);

export const createPost = createAsyncThunk(
	"posts/createPost",
	async ({ post, navigate }, { dispatch }) => {
		const config = getAuthConfig();
		const newPost = new FormData();
		newPost.append("company_name", post.companyName);
		newPost.append("vacancy", post.vacancy);
		newPost.append("experience", post.experience);
		newPost.append("salary", post.salary);
		newPost.append("description", post.description);
		const { data } = await axios.post(
			`${API}/posts/`,
			newPost,
			config ? config : null
		);
		dispatch(getPosts());
		return { data, navigate };
	}
);

export const getCategories = createAsyncThunk(
	"posts/getCategories",
	async () => {
		const { data } = await axios.get(`${API}/category/list/`);
		return data;
	}
);

export const updatePost = createAsyncThunk(
	"posts/updatePost",
	async ({ post, navigate }, { dispatch }) => {
		const config = getAuthConfig();
		const updatedPost = new FormData();
		updatedPost.append("company_name", post.company_name);
		updatedPost.append("vacancy", post.vacancy);
		updatedPost.append("experience", post.experience);
		updatedPost.append("salary", post.salary);
		updatedPost.append("description", post.description);
		const { data } = await axios.patch(
			`${API}/posts/${post.id}/`,
			updatedPost,
			config
		);
		dispatch(getPosts());
		return { data, navigate };
	}
);

export const deletePost = createAsyncThunk(
	"posts/deletePost",
	async ({ id }, { dispatch }) => {
		const config = getAuthConfig();
		const { data } = await axios.delete(`${API}/posts/${id}/`, config);
		dispatch(getPosts());
		return { data };
	}
);

export const createReview = createAsyncThunk(
	"posts/createReview",
	async ({ text, postId }) => {
		const config = getAuthConfig();
		const newReview = new FormData();
		newReview.append("text", text);
		newReview.append("post", postId);
		const { data } = await axios.post(`${API}/reviews/`, newReview, config);
		return { data };
	}
);

export const deleteReview = createAsyncThunk(
	"posts/deleteReview",
	async ({ reviewId, postId }, { dispatch }) => {
		const config = getAuthConfig();
		const { data } = await axios.delete(`${API}/reviews/${reviewId}/`, config);
		dispatch(getOnePost({ id: postId }));
		return { data };
	}
);

export const getFavorites = createAsyncThunk("posts/getFavorites", async () => {
	const config = getAuthConfig();
	const { data } = await axios.get(`${API}/favorites/`, config);
	return { data };
});

export const toggleFavorite = createAsyncThunk(
	"posts/toggleFavorite",
	async ({ id }, { postId }, { dispatch }) => {
		const config = getAuthConfig();
		const { data } = await axios.get(`${API}/posts/${id}/favorites/`, config);
		dispatch(getOnePost({ id: postId }));
		dispatch(getFavorites());
		return { data };
	}
);
