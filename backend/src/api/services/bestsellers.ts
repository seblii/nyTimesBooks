import axios from 'axios';
import ServerError from "../../lib/error";
import { GetBestSellersByListName } from "../models/getBestSellersByListNameRequest";
import nytBooksClient from "./nytBooksClient";
import appConfig from '../../lib/config';

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
  console.log(options);
  try {
    const { data } = await nytBooksClient.get(
      `lists/current/${options.list_name_encoded}.json`
    );

    return {
      status: 200,
      data: data
    }

  } catch (error) {
    throw new ServerError({
      status: 500,
      error: `Server Error: ${axios.isAxiosError(error) ? error.message : error} apikey: ${appConfig.nytimes.apikey}`
    });
  }

};

export default {
  getBestsellersByListName
}
