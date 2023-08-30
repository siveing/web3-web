import Axios from 'axios'
import { getCookie } from 'cookies-next';

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const axios = Axios.create({
    baseURL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + getCookie('userToken'),
    },
})

export default axios;
