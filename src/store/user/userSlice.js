import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, getOneUser, updateUserProfile, forgotPassword, changeNewPassword } from './userAction';
import { refreshUserToken, addUserDataToLocalStorage } from '../../helpers/functions'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        status: '',
        profile: [],
        editProfile: null
    },
    reducers: {
        clearCurrentAccount: (state) => {
            state.currentUser = null;
        },
        clearStatus: (state) => {
            state.status = '';
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(registerUser.fulfilled, (_, action) => {
            action.payload.navigate('/account/user-log/');
        })
        .addCase(registerUser.rejected, (state) => {
            state.status = 'user error';
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.currentUser = action.payload.userEmail;
            addUserDataToLocalStorage(action.payload.userEmail, action.payload.data);
            refreshUserToken(); refreshUserToken()
            action.payload.navigate('/');
            console.log('user login');
        })
        .addCase(loginUser.rejected, (state) => {
            state.status = 'error';
        })
        .addCase(getOneUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(getOneUser.fulfilled, (state, action) => {
            state.loading = false;
            state.profile = action.payload.data;
            console.log(state.profile);
        })
        .addCase(getOneUser.rejected, (state) => {
            state.loading = true;
        })
        .addCase(updateUserProfile.fulfilled, (_, action) => {
            action.payload.navigate('/profile/user/');
        })
        .addCase(forgotPassword.fulfilled, (state, action) => {
            state.currentUser = action.payload.userEmail;
            action.payload.navigate('/new-password/');
            console.log('forgot password');
        })
        .addCase(changeNewPassword.fulfilled, (_, action) => {
            action.payload.navigate('/account/user-log/');
        })
        .addCase(changeNewPassword.rejected, (state) => {
            state.status = 'user error';
        })
    }
})

export const { clearStatus, currentUser } = userSlice.actions
export default userSlice.reducer