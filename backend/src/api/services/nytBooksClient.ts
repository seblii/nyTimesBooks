export const NYT_API_BASEURL = 'https://api.nytimes.com/svc/books/v3/';
import * as nytimesApi from './nytimesApi/api'

const nytBooksClient = new nytimesApi.DefaultApi();
if (process.env.NYT_API_KEY) {
    nytBooksClient.setApiKey(nytimesApi.DefaultApiApiKeys['api-key'], process.env.NYT_API_KEY);
} else {
    throw new Error('API-key missing. Set one on NYT_API_KEY environment variable.');
}

export default nytBooksClient;