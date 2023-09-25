import axios from "axios";
import { API } from "./consts";

export const addDataToLocalStorage = (recruiterEmail, tokens) => {
  localStorage.setItem("account", JSON.stringify(recruiterEmail));
  localStorage.setItem("tokens", JSON.stringify(tokens));
};

export const addUserDataToLocalStorage = (userEmail, tokens) => {
  localStorage.setItem('user', JSON.stringify(userEmail));
  localStorage.setItem('tokens', JSON.stringify(tokens));
};

export const refreshToken = () => {
  const updateFunc = setInterval(async () => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    if (!tokens) return clearInterval(updateFunc);
    const Authorization = `Bearer ${tokens.access}`;
    const res = await axios.post(
      `${API}/recruiter-refresh`,
      { refresh: tokens.refresh },
      { headers: { Authorization } }
    );
    localStorage.setItem(
      "tokens",
      JSON.stringify({ refresh: tokens.refresh, access: res.data.access })
    );
    console.log("work");
  }, 1000 * 60 * 8);
};

export const refreshUserToken = () => {
  console.log('WORK')
  const updateFunc = setInterval(async () => {
      const tokens = JSON.parse(localStorage.getItem('tokens'));
      if(!tokens) return clearInterval(updateFunc);
      const Authorization = `Bearer ${tokens.access}`;
      const res = await axios.post(`${API}/account/user-ref/`, { refresh: tokens.refresh }, { headers: { Authorization } });
      localStorage.setItem('tokens', JSON.stringify({ refresh: tokens.refresh, access: res.data.access }));
  }, 1000*60*4 );
}

export const getAuthConfig = () => {
  const tokens = JSON.parse(localStorage.getItem('tokens'));
  if(!tokens) return false;
  const Authorization = `Bearer ${tokens.access};`
  const config = {
      headers: {
          Authorization
      }
  };
  return config;
}