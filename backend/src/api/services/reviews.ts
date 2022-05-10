import axios from 'axios';
const objectMapper = require('object-mapper');
import ServerError from "../../lib/error";
import { GetReviewsByISBNRequests } from '../models/getReviewsByISBNRequest';
import nytBooksClient from "./nytBooksClient";
import { InlineResponse2004Results as ReviewIn } from './nytimesApi/api';



const ReviewInToReviewOutMap = {
    "byline": "byline",
    "url": "url",
}

/**
 * @param {Object} options
 * @param {String} options.list_name_encoded 
 * @throws {Error}
 * @return {Promise}
 */
const getReviewsByISBN = async (options: GetReviewsByISBNRequests): Promise<any> => {
    try {
        const data = await nytBooksClient.gETReviewsFormat(options.isbn);
        const results = data.body.results || [];

        return {
            status: 200,
            data: results.map((review: ReviewIn) => objectMapper.merge(review, ReviewInToReviewOutMap)),
        }

    } catch (error) {
        throw new ServerError({
            status: 500,
            error: `Server Error: ${JSON.stringify(error)}`
        });
    }

};

export default {
    getReviewsByISBN
}
