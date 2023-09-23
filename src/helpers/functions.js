import axios from 'axios';
import { API } from './consts';

export const addDataToLocalStorage = (recruiterEmail, tokens) => {
    localStorage.setItem('recruiter', JSON.stringify(recruiterEmail));
    localStorage.setItem('tokens', JSON.stringify(tokens));
};

export const addUserDataToLocalStorage = (userEmail, tokens) => {
    localStorage.setItem('user', JSON.stringify(userEmail));
    localStorage.setItem('tokens', JSON.stringify(tokens));
};

export const refreshToken = () => {
    console.log('WORK')
    const updateFunc = setInterval(async () => {
        const tokens = JSON.parse(localStorage.getItem('tokens'));
        if(!tokens) return clearInterval(updateFunc);
        const Authorization = `Bearer ${tokens.access}`;
        const res = await axios.post(`${API}/account/rec-ref/`, { refresh: tokens.refresh }, { headers: { Authorization } });
        localStorage.setItem('tokens', JSON.stringify({ refresh: tokens.refresh, access: res.data.access }));
    }, 1000*60*4 );
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

export const logout = () => {
    console.log('logout');
    localStorage.removeItem('recruiter');
    localStorage.removeItem('tokens');   
};

export const Userlogout = () => {
    console.log('Userlogout');
    localStorage.removeItem('User');
    localStorage.removeItem('tokens');   
};

export const isRecruiterLogin = () => {
    const recruiter = localStorage.getItem('recruiter');
    if(!recruiter) return false;
    return true;
};

export const isUserLogin = () => {
    const user = localStorage.getItem('user');
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
}

// export const getUser = () => {
//     const headers = getAuthConfig()
//     const { data } = fetch(`${API}/account/me/`, {
//         method: "GET",
//         headers: {
//             ...headers
//         }
//     })

// }