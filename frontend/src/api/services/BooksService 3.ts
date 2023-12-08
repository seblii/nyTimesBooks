/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BooksService {

    /**
     * Retrieve a list of best-selling books.
     * Fetches a list of best-selling books from the New York Times based on the provided list name.
     * @param encodedListName The encoded name of the best-seller list to retrieve.
     * @returns any A list of best-selling books from the specified list.
     * @throws ApiError
     */
    public static getBestSellersList(
        encodedListName: string,
    ): CancelablePromise<Array<{
        /**
         * The title of the book.
         */
        title?: string;
        /**
         * The author of the book.
         */
        author?: string;
        /**
         * A short description of the book.
         */
        description?: string;
        /**
         * The ISBN number of the book.
         */
        isbn?: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/best-sellers-list',
            query: {
                'encodedListName': encodedListName,
            },
            errors: {
                400: `Bad request, when the 'encodedListName' parameter is missing.`,
            },
        });
    }

}
