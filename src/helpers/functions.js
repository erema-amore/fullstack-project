import axios from 'axios';
import { API } from './consts';

export const addDataToLocalStorage = (recruiterEmail, tokens) => {
    localStorage.setItem('account', JSON.stringify(recruiterEmail));
    localStorage.setItem('tokens', JSON.stringify(tokens));
};

export const refreshToken = () => {
    const updateFunc = setInterval(async () => {
        const tokens = JSON.parse(localStorage.getItem('tokens'));
        if(!tokens) return clearInterval(updateFunc);
        const Authorization = `Bearer ${tokens.access}`;
        const res = await axios.post(`${API}/recruiter-refresh`, { refresh: tokens.refresh }, { headers: { Authorization } });
        localStorage.setItem('tokens', JSON.stringify({ refresh: tokens.refresh, access: res.data.access }));
        console.log('work');
    }, 1000*60*8 );
};