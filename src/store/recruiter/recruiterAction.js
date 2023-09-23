import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from '../../helpers/consts';

export const registerRecruiter = createAsyncThunk(
    'recruiter/registerRecruiter',
    async ({ recruiterObj, navigate }) => {
        let formData = new FormData();
        formData.append('email', recruiterObj.email);
        formData.append('password', recruiterObj.password);
        formData.append('password_confirm', recruiterObj.passwordConfirm);
        let { data } = await axios.post(`${API}/account/rec-reg/`, formData);
        return { data, navigate };
    }
);

export const loginRecruiter = createAsyncThunk(
    'recruiter/loginRecruiter',
    async ({ recruiterObj, navigate }) => {
        let formData = new FormData();
        formData.append('email', recruiterObj.email);
        formData.append('password', recruiterObj.password);
        let { data } = await axios.post(`${API}/account/rec-log/`, formData);
        return { data, navigate, recruiterEmail: recruiterObj.email };
    }
);
