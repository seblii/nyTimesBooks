"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const objectMapper = require('object-mapper');
const nytBooksClient_1 = __importDefault(require("./nytBooksClient"));
const error_1 = __importDefault(require("../../lib/error"));
const config_1 = __importDefault(require("../../lib/config"));
const BookListToListNameMap = {
    "display_name": "display_name",
    "list_name_encoded": "list_name_encoded"
};
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
        const { data } = await nytBooksClient_1.default.get(`lists/names.json`);
        return {
            status: 200,
            data: data.results.map((bookList) => objectMapper.merge(bookList, BookListToListNameMap)),
        };
    }
    catch (error) {
        throw new error_1.default({
            status: 500,
            error: `Server Error: ${axios_1.default.isAxiosError(error) ? error.message : error} apikey: ${config_1.default.nytimes.apikey}`
        });
    }
};
exports.default = {
    getListNames
};
