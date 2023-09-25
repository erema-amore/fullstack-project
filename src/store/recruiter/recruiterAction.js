import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from '../../helpers/consts';
import { getAuthConfig } from '../../helpers/functions'

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

export const getOneRecruiter = createAsyncThunk(
    'recruiter/getOneRecruiter',
    async () => {
        const config = getAuthConfig();
        const {data} = await axios.get(`${API}/profile/req/`, config);
        console.log(data);
        return {data};
    }
);

export const updateRecruiterProfile = createAsyncThunk(
    'recruiter/updateRecruiterProfile',
    async ({ editProfile, navigate }, { dispatch }) => {
        const config = getAuthConfig();
        const updateRecruiterProfile= new FormData();
        updateRecruiterProfile.append('company_name', editProfile.company_name);
        updateRecruiterProfile.append('location', editProfile.location);
        updateRecruiterProfile.append('amount_of_emplyees', editProfile.amount_of_emplyees);
        updateRecruiterProfile.append('company_phone', editProfile.company_phone);
        updateRecruiterProfile.append('about_company', editProfile.about_company);
        const { data } = await axios.patch(`${API}/profile/req/`, updateRecruiterProfile, config);
        dispatch(getOneRecruiter());
        return { data, navigate };
    }
);