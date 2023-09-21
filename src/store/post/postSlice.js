import { createSlice } from "@reduxjs/toolkit";
import { getPosts, getOnePost, createPost, getCategories, updatePost, getFavorites } from "./postAction";
const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false,
        onePost: null,
        currentPage: 1,
        totalPages: 1,
        categories: [],
        favorites: []
    },
    reducers: {
        clearOnePostState: (state) => {
            state.onePost = null;
        },
        changePage: (state, action) => {
            state.currentPage = action.payload.page;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPosts.pending, (state) => {
            state.loading = true;
        })
        .addCase(getPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload.results;
            state.totalPages = Math.ceil(action.payload.count / 10);
        })
        .addCase(getPosts.rejected, (state) => {
            state.loading = false;
        })
        .addCase(getOnePost.pending, (state) => {
            state.loading = true;
        })
        .addCase(getOnePost.fulfilled, (state, action) => {
            state.loading = false;
            state.onePost = action.payload;
        })
        .addCase(getOnePost.rejected, (state) => {
            state.loading = false;
        })
        .addCase(createPost.fulfilled, (_, action) => {
            action.payload.navigate('/');
        })
        .addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload.results;
        })
        .addCase(updatePost.fulfilled, (_, action) => {
            action.payload.navigate('/');
        })
        .addCase(getFavorites.pending, (state) => {
            state.loading = true;
        })
        .addCase(getFavorites.fulfilled, (state, action) => {
            state.loading = false;
            state.favorites = action.payload.data.results;
        })
        .addCase(getFavorites.rejected, (state) => {
            state.loading = false;
        })
    }
});

export const { clearOnePostState, changePage } = postSlice.actions;
export default postSlice.reducer;
