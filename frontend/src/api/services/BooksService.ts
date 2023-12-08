/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Book } from '../models/Book';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BooksService {

    /**
     * Retrieve a list of best-selling books
     * Fetches a list of best-selling books from the New York Times based on the provided list name.
     * @param encodedListName The encoded name of the best-seller list to retrieve.
     * @returns Book A successful response containing a list of best-selling books.
     * @throws ApiError
     */
    public static getBestSellersList(
        encodedListName: string,
    ): CancelablePromise<Array<Book>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/best-sellers-list',
            query: {
                'encodedListName': encodedListName,
            },
            errors: {
                400: `Bad request, when the 'encodedListName' parameter is missing.`,
                500: `Internal server error`,
            },
        });
    }

}
