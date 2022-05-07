const ServerError = require('../../lib/error');

export interface IGetBestSellersByListName {
  list_name_encoded: string;
}

/**
 * @param {Object} options
 * @param {String} options.list_name_encoded 
 * @throws {Error}
 * @return {Promise}
 */
const getBestsellersByListName = async (options: IGetBestSellersByListName) => {
  // Implement your business logic here...
  //
  // This function should return as follows:
  //
  // return {
  //   status: 200, // Or another success code.
  //   data: [] // Optional. You can put whatever you want here.
  // };
  //
  // If an error happens during your business logic implementation,
  // you should throw an error as follows:
  //
  // throw new ServerError({
  //   status: 500, // Or another error code.
  //   error: 'Server Error' // Or another error message.
  // });

  return {
    status: 200,
    data: 'getBestsellersByListName ok!'
  };
};

export default {
  getBestsellersByListName
}
