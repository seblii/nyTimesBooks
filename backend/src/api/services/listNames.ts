import axios from 'axios';
const objectMapper = require('object-mapper');
import * as nytimesApi from './nytimesApi/api';
import { BookList, ListNamesResponse } from '../models/listNamesResponse';
import nytBooksClient from "./nytBooksClient";
import ServerError from '../../lib/error';
import appConfig from '../../lib/config';

const BookListToListNameMap = {
  "display_name": "display_name",
  "list_name_encoded": "list_name_encoded"
}

/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
const getListNames = async () => {
  /* FIXME: Use the generated nytimesApi
  /      const api = new nytimesApi.DefaultApi();
  /       console.log(api.gETListsNamesFormat());
  */

  try {
    const { data } = await nytBooksClient.get(
      `lists/names.json`
    );

    return {
      status: 200,
      data: data.results.map((bookList: BookList) => objectMapper.merge(bookList, BookListToListNameMap)),
    }

  } catch (error) {
    throw new ServerError({
      status: 500,
      error: `Server Error: ${axios.isAxiosError(error) ? error.message : error} apikey: ${appConfig.nytimes.apikey}`
    });
  }
};

export default {
  getListNames
}
