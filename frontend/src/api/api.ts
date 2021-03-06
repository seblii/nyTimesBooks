/* tslint:disable */
/* eslint-disable */
/**
 * NY Times Bestsellers Browser API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Configuration } from "./configuration";
import globalAxios, {
  AxiosPromise,
  AxiosInstance,
  AxiosRequestConfig,
} from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "./common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "./base";

/**
 *
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
  /**
   *
   * @type {string}
   * @memberof InlineResponse200
   */
  display_name?: string;
  /**
   *
   * @type {string}
   * @memberof InlineResponse200
   */
  list_name_encoded?: string;
}
/**
 *
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
  /**
   *
   * @type {string}
   * @memberof InlineResponse2001
   */
  title?: string;
  /**
   *
   * @type {string}
   * @memberof InlineResponse2001
   */
  author?: string;
  /**
   *
   * @type {string}
   * @memberof InlineResponse2001
   */
  isbn?: string;
}
/**
 *
 * @export
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {
  /**
   *
   * @type {string}
   * @memberof InlineResponse2002
   */
  byline?: string;
  /**
   *
   * @type {string}
   * @memberof InlineResponse2002
   */
  url?: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Returns topsellers book by list name.
     * @param {string} listNameEncoded list_name_encoded from categories query
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bestsellersListNameEncodedGet: async (
      listNameEncoded: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'listNameEncoded' is not null or undefined
      assertParamExists(
        "bestsellersListNameEncodedGet",
        "listNameEncoded",
        listNameEncoded
      );
      const localVarPath = `/bestsellers/{list_name_encoded}`.replace(
        `{${"list_name_encoded"}}`,
        encodeURIComponent(String(listNameEncoded))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Returns a list of book categories.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listNamesGet: async (
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/listNames`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Returns book reviews by isbn.
     * @param {number} isbn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    reviewsIsbnGet: async (
      isbn: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'isbn' is not null or undefined
      assertParamExists("reviewsIsbnGet", "isbn", isbn);
      const localVarPath = `/reviews/{isbn}`.replace(
        `{${"isbn"}}`,
        encodeURIComponent(String(isbn))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary Returns topsellers book by list name.
     * @param {string} listNameEncoded list_name_encoded from categories query
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async bestsellersListNameEncodedGet(
      listNameEncoded: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<InlineResponse2001>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.bestsellersListNameEncodedGet(
          listNameEncoded,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Returns a list of book categories.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listNamesGet(
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<InlineResponse200>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listNamesGet(
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary Returns book reviews by isbn.
     * @param {number} isbn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async reviewsIsbnGet(
      isbn: number,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<InlineResponse2002>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.reviewsIsbnGet(
        isbn,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = DefaultApiFp(configuration);
  return {
    /**
     *
     * @summary Returns topsellers book by list name.
     * @param {string} listNameEncoded list_name_encoded from categories query
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bestsellersListNameEncodedGet(
      listNameEncoded: string,
      options?: any
    ): AxiosPromise<Array<InlineResponse2001>> {
      return localVarFp
        .bestsellersListNameEncodedGet(listNameEncoded, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Returns a list of book categories.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listNamesGet(options?: any): AxiosPromise<Array<InlineResponse200>> {
      return localVarFp
        .listNamesGet(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Returns book reviews by isbn.
     * @param {number} isbn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    reviewsIsbnGet(
      isbn: number,
      options?: any
    ): AxiosPromise<Array<InlineResponse2002>> {
      return localVarFp
        .reviewsIsbnGet(isbn, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
  /**
   *
   * @summary Returns topsellers book by list name.
   * @param {string} listNameEncoded list_name_encoded from categories query
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public bestsellersListNameEncodedGet(
    listNameEncoded: string,
    options?: AxiosRequestConfig
  ) {
    return DefaultApiFp(this.configuration)
      .bestsellersListNameEncodedGet(listNameEncoded, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Returns a list of book categories.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public listNamesGet(options?: AxiosRequestConfig) {
    return DefaultApiFp(this.configuration)
      .listNamesGet(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Returns book reviews by isbn.
   * @param {number} isbn
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public reviewsIsbnGet(isbn: number, options?: AxiosRequestConfig) {
    return DefaultApiFp(this.configuration)
      .reviewsIsbnGet(isbn, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
