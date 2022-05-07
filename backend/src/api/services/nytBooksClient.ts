import axios from 'axios';
export const NYT_API_BASEURL = 'https://api.nytimes.com/svc/books/v3/';
import appConfig from '../../lib/config';
const nytBooksClient = axios.create({
    baseURL: NYT_API_BASEURL,
});

nytBooksClient.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params['api-key'] = appConfig.nytimes.apikey;
    return config;
});

export default nytBooksClient;