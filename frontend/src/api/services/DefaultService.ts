/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookCategory } from '../models/BookCategory';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

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

}
