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
        clearStatus: (state) => {
            state.status = '';
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(registerRecruiter.fulfilled, (_, action) => {
            action.payload.navigate('/recruter-login/');
        })
        .addCase(registerRecruiter.rejected, (state) => {
            state.status = 'error';
        })
        .addCase(loginRecruiter.fulfilled, (state, action) => {
            state.currentAccount = action.payload.recruiterEmail;
            addDataToLocalStorage(action.payload.recruiterEmail, action.payload.data);
            refreshToken();
            action.payload.navigate('/');
        })
        .addCase(loginRecruiter.rejected, (state) => {
            state.status = 'error';
        })
    }
})

export const { clearStatus } = recruiterSlice.actions
export default recruiterSlice.reducer