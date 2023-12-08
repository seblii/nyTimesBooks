/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Book } from '../models/Book';
import type { BookCategory } from '../models/BookCategory';
import type { Review } from '../models/Review';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Retrieve books from a specified best-seller list
     * @param encodedListName The encoded name (in a specific format) of the best-seller list from which books are to be retrieved.
     * @returns Book A successful response returning an array of books from the specified best-seller list. Each book contains details like title, author, and ISBN.
     * @throws ApiError
     */
    public static getCategory(
        encodedListName: string,
    ): CancelablePromise<Array<Book>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/category',
            query: {
                'encodedListName': encodedListName,
            },
            errors: {
                400: `Bad request. This can occur if the 'encodedListName' parameter is missing, empty, or in an invalid format.`,
            },
        });
    }

    /**
     * Request best seller books list names
     * @returns BookCategory List of book category names
     * @throws ApiError
     */
    public static getListNames(): CancelablePromise<Array<BookCategory>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/list-names',
        });
    }

    /**
     * Retrieve books from a specified best-seller list
     * @param isbn The International Standard Book Number of the book to fetch reviews for.
     * @returns Review An array of book reviews.
     * @throws ApiError
     */
    public static getReviews(
        isbn: number,
    ): CancelablePromise<Array<Review>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/reviews',
            query: {
                'isbn': isbn,
            },
            errors: {
                400: `Bad request. This can occur if the 'isbn' parameter is missing, empty, or in an invalid format.`,
            },
        });
    }

}
