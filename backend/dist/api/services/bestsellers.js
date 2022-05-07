"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const error_1 = __importDefault(require("../../lib/error"));
const nytBooksClient_1 = __importDefault(require("./nytBooksClient"));
const config_1 = __importDefault(require("../../lib/config"));
/**
 * @param {Object} options
 * @param {String} options.list_name_encoded
 * @throws {Error}
 * @return {Promise}
 */
const getBestsellersByListName = async (options) => {
    /* FIXME: Use the generated nytimesApi
    /    nytimesApi.DefaultApi.gETListsNamesFormat()  ??
    */
    console.log(options);
    try {
        const { data } = await nytBooksClient_1.default.get(`lists/current/${options.list_name_encoded}.json`);
        return {
            status: 200,
            data: data
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
    getBestsellersByListName
};
