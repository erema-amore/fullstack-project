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
        formData.append('company_name', recruiterObj.companyName);
        formData.append('employee_position', recruiterObj.employeePosition);
        formData.append('country', recruiterObj.country);
        formData.append('company_id', recruiterObj.companyId);
        formData.append('company_phone', recruiterObj.companyPhone);
        let { data } = await axios.post(`${API}/recruter-register/`, formData);
        return { data, navigate };
    }
);

export const loginRecruiter = createAsyncThunk(
    'recruiter/loginRecruiter',
    async ({ recruiterObj, navigate }) => {
        let formData = new FormData();
        formData.append('email', recruiterObj.email);
        formData.append('password', recruiterObj.password);
        let { data } = await axios.post(`${API}/recruter-login/`, formData);
        return { data, navigate, userEmail: recruiterObj.email };
    }
);
