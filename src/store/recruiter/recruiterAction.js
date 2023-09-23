import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";
import { getAuthConfig } from "../../helpers/functions";

export const registerRecruiter = createAsyncThunk(
  "recruiter/registerRecruiter",
  async ({ recruiterObj, navigate }) => {
    let formData = new FormData();
    formData.append("email", recruiterObj.email);
    formData.append("password", recruiterObj.password);
    formData.append("password_confirm", recruiterObj.passwordConfirm);
    let { data } = await axios.post(`${API}/account/rec-reg/`, formData);
    return { data, navigate };
  }
);

export const loginRecruiter = createAsyncThunk(
  "recruiter/loginRecruiter",
  async ({ recruiterObj, navigate }) => {
    let formData = new FormData();
    formData.append("email", recruiterObj.email);
    formData.append("password", recruiterObj.password);
    let { data } = await axios.post(`${API}/account/rec-log/`, formData);
    return { data, navigate, recruiterEmail: recruiterObj.email };
  }
);

export const getOneRecruiter = createAsyncThunk(
  "recruiter/getOneRecruiter",
  async () => {
    const config = getAuthConfig();
    const profile = await axios.get(
      `${API}/profile/req/`,
      config ? config : null
    );
    console.log(profile);
    return profile;
  }
);
