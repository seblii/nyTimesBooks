"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const objectMapper = require('object-mapper');
const nytimesApi = __importStar(require("./nytimesApi/api"));
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
    /     const api = new nytimesApi.DefaultApi().gETListsNamesFormat();
    */
    const api = new nytimesApi.DefaultApi();
    console.log(api.gETListsNamesFormat());
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
