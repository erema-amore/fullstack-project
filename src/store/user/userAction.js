import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from '../../helpers/consts';
import { getAuthConfig } from '../../helpers/functions'

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async ({ userObj, navigate }) => {
        let formData = new FormData();
        formData.append('email', userObj.email);
        formData.append('password', userObj.password);
        formData.append('password_confirm', userObj.passwordConfirm);
        let { data } = await axios.post(`${API}/account/user-reg/`, formData);
        return { data, navigate };
    }
);

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({ userObj, navigate }) => {
        let formData = new FormData();
        formData.append('email', userObj.email);
        formData.append('password', userObj.password);
        let { data } = await axios.post(`${API}/account/user-log/`, formData);
        return { data, navigate, userEmail: userObj.email };
    }
);

export const getOneUser = createAsyncThunk(

    'user/getOneUser',
    async () => {
        const config = getAuthConfig();
        const {data} = await axios.get(`${API}/profile/user/`, config);
        console.log(data);
        return {data};
    }
);

export const updateUserProfile = createAsyncThunk(
    'user/updateUserProfile',
    async ({ editProfile, navigate }, { dispatch }) => {
        const config = getAuthConfig();
        console.log(typeof(editProfile.image) === 'object');
        const updateUserProfile= new FormData();
        updateUserProfile.append('name', editProfile.name);
        updateUserProfile.append('surname', editProfile.surname);
        updateUserProfile.append('email', editProfile.email);
        updateUserProfile.append('about_user', editProfile.about_user);
        if(typeof(editProfile.image) === 'object' && (editProfile.image !== null)) {
            console.log('WORK');
            updateUserProfile.append('image', editProfile.image);
        };
        if(typeof(editProfile.user_resume) === 'object'  && (editProfile.user_resume !== null)) {
            console.log('work2');
            updateUserProfile.append('user_resume', editProfile.user_resume);
        };
        const { data } = await axios.patch(`${API}/profile/user/`, updateUserProfile, config);
        dispatch(getOneUser());
        return { data, navigate };
    }
);