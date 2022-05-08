import axios from 'axios';
const objectMapper = require('object-mapper');
import ServerError from "../../lib/error";
import { GetBestSellersByListName } from "../models/getBestSellersByListNameRequest";
import nytBooksClient from "./nytBooksClient";


const BookInToBookOutMap = {
  "title": "title",
  "author": "author",
  "primary_isbn10": "isbn",
}

/**
 * @param {Object} options
 * @param {String} options.list_name_encoded 
 * @throws {Error}
 * @return {Promise}
 */
const getBestsellersByListName = async (options: GetBestSellersByListName) => {
  /* FIXME: Use the generated nytimesApi
  /    nytimesApi.DefaultApi.gETListsNamesFormat()  ??
  */
  try {
    const { data } = await nytBooksClient.get(
      `lists/current/${options.list_name_encoded}.json`
    );

    return {
      status: 200,
      //FIXME: "any" -type
      data: data.results.books.map((book: any) => objectMapper.merge(book, BookInToBookOutMap)),
    }

  } catch (error) {
    throw new ServerError({
      status: 500,
      error: `Server Error: ${axios.isAxiosError(error) ? error.message : error}`
    });
  }

};

export default {
  getBestsellersByListName
}
