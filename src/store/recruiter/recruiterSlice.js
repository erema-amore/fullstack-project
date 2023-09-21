import { createSlice } from "@reduxjs/toolkit";
import { registerRecruiter, loginRecruiter} from './recruiterAction';
import { refreshToken, addDataToLocalStorage } from '../../helpers/functions'

const recruiterSlice = createSlice({
    name: 'recruiter',
    initialState: {
        currentRecruiter: null,
        status: ''
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
            action.payload.navigate('/account/recruter-login/');
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
    }
})

export const { clearStatus, currentRecruiter } = recruiterSlice.actions
export default recruiterSlice.reducer