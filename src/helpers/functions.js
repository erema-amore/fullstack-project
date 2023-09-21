import axios from 'axios';
import { API } from './consts';

export const addDataToLocalStorage = (recruiterEmail, tokens) => {
    localStorage.setItem('recruiter', JSON.stringify(recruiterEmail));
    localStorage.setItem('tokens', JSON.stringify(tokens));
};

export const refreshToken = () => {
    console.log('WORK')
    const updateFunc = setInterval(async () => {
        const tokens = JSON.parse(localStorage.getItem('tokens'));
        if(!tokens) return clearInterval(updateFunc);
        const Authorization = `Bearer ${tokens.access}`;
        const res = await axios.post(`${API}/account/recruter-refresh/`, { refresh: tokens.refresh }, { headers: { Authorization } });
        localStorage.setItem('tokens', JSON.stringify({ refresh: tokens.refresh, access: res.data.access }));
    }, 1000*60*4 );
};

export const logout = () => {
    console.log('logout');
    localStorage.removeItem('recruiter');
    localStorage.removeItem('tokens');   
};

export const isUserLogin = () => {
    const user = localStorage.getItem('recruiter');
    if(!user) return false;
    return true;
};

export const getAuthConfig = () => {
    const tokens = JSON.parse(localStorage.getItem('tokens'));
    if(!tokens) return false;
    const Authorization = `Bearer ${tokens.access}`;
    const config = {
        headers: {
            Authorization
        }
    };
    return config;
};