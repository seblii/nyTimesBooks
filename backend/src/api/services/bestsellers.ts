import axios from 'axios';
const objectMapper = require('object-mapper');
import ServerError from "../../lib/error";
import { GetBestSellersByListName } from "../models/getBestSellersByListNameRequest";
import nytBooksClient from "./nytBooksClient";
import { InlineResponse2001ResultsBooks as BookIn } from './nytimesApi/model/inlineResponse2001ResultsBooks';


const BookInToBookOutMap = {
  "title": "title",
  "author": "author",
  "primaryIsbn13": "isbn"
}

/**
 * @param {Object} options
 * @param {String} options.list_name_encoded 
 * @throws {Error}
 * @return {Promise}
 */
const getBestsellersByListName = async (options: GetBestSellersByListName): Promise<any> => {
  try {

    const data = await nytBooksClient.gETListsDateListJson('current', options.list_name_encoded);
    const results = data.body.results?.books || [];

    return {
      status: 200,
      data: results.map((book: BookIn) => objectMapper.merge(book, BookInToBookOutMap)),
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
