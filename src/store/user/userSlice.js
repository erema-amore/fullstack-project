import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser} from './userAction';
import { refreshToken, addDataToLocalStorage } from '../../helpers/functions'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        status: ''
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
            addDataToLocalStorage(action.payload.userEmail, action.payload.data);
            refreshToken();
            action.payload.navigate('/');
            console.log('user login');
        })
        .addCase(loginUser.rejected, (state) => {
            state.status = 'error';
        })
    }
})

export const { clearStatus, currentUser } = userSlice.actions
export default userSlice.reducer