import axios from 'axios';
const objectMapper = require('object-mapper');
import nytBooksClient from "./nytBooksClient";
import ServerError from '../../lib/error';
import { InlineResponse2002Results as BookList } from './nytimesApi/api';

const BookListToListNameMap = {
  "displayName": "display_name",
  "listNameEncoded": "list_name_encoded"
}

/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
const getListNames = async (): Promise<any> => {
  try {
    const data = await nytBooksClient.gETListsNamesFormat()
    const results = data.body.results || [];

    return {
      status: 200,
      data: results.map((bookList: BookList) => objectMapper.merge(bookList, BookListToListNameMap)),
    }

  } catch (error) {
    throw new ServerError({
      status: 500,
      error: `Server Error: ${axios.isAxiosError(error) ? error.message : error}`
    });
  }
};

export default {
  getListNames
}
