/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Review } from '../models/Review';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReviewsService {

    /**
     * Retrieve reviews for books.
     * Fetches review references from the New York Times based on ISBN, title, or author.
     * @param isbn The International Standard Book Number of the book to fetch reviews for.
     * @param title The title of the book to fetch reviews for.
     * @param author The author of the book to fetch reviews for.
     * @returns Review An array of book reviews.
     * @throws ApiError
     */
    public static getReviews(
        isbn?: string,
        title?: string,
        author?: string,
    ): CancelablePromise<Array<Review>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/reviews',
            query: {
                'isbn': isbn,
                'title': title,
                'author': author,
            },
        });
    }

}
