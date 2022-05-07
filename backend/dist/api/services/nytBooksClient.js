"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NYT_API_BASEURL = void 0;
const axios_1 = __importDefault(require("axios"));
exports.NYT_API_BASEURL = 'https://api.nytimes.com/svc/books/v3/';
const config_1 = __importDefault(require("../../lib/config"));
const nytBooksClient = axios_1.default.create({
    baseURL: exports.NYT_API_BASEURL,
});
nytBooksClient.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params['api-key'] = config_1.default.nytimes.apikey;
    return config;
});
exports.default = nytBooksClient;
