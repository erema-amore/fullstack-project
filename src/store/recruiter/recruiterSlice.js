import { createSlice } from "@reduxjs/toolkit";
import { registerRecruiter, loginRecruiter, getOneRecruiter} from './recruiterAction';
import { refreshToken, addDataToLocalStorage } from '../../helpers/functions'

const recruiterSlice = createSlice({
    name: 'recruiter',
    initialState: {
        currentRecruiter: null,
        status: '',
        loading: false,
        profile: []
    },
    reducers: {
        clearCurrentAccount: (state) => {
            state.currentRecruiter = null;
        },
        clearStatus: (state) => {
            state.status = '';
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(registerRecruiter.fulfilled, (_, action) => {
            action.payload.navigate('/account/rec-log/');
        })
        .addCase(registerRecruiter.rejected, (state) => {
            state.status = 'error';
        })
        .addCase(loginRecruiter.fulfilled, (state, action) => {
            state.currentRecruiter = action.payload.recruiterEmail;
            addDataToLocalStorage(action.payload.recruiterEmail, action.payload.data);
            refreshToken();
            action.payload.navigate('/');
            console.log('login');
        })
        .addCase(loginRecruiter.rejected, (state) => {
            state.status = 'error';
        })
        .addCase(getOneRecruiter.pending, (state) => {
            state.loading = true;
        })
        .addCase(getOneRecruiter.fulfilled, (state, action) => {
            state.loading = false;
            state.favorites = action.payload
            console.log(state);
        })
        .addCase(getOneRecruiter.rejected, (state) => {
            state.loading = true;
        })
    }
})

export const { clearStatus, currentRecruiter } = recruiterSlice.actions
export default recruiterSlice.reducer