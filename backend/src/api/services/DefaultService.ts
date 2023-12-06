/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OverviewResponse } from '../models/OverviewResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Best Sellers List
     * Get Best Sellers list.  If no date is provided returns the latest list.
     * @param list The name of the Times best sellers list (hardcover-fiction, paperback-nonfiction, ...).
     * The /lists/names service returns all the list names.
     * The encoded list names are lower case with hyphens instead of spaces (e.g. e-book-fiction, instead of E-Book Fiction).
     * @param bestsellersDate YYYY-MM-DD
     *
     * The week-ending date for the sales reflected on list-name. Times best sellers lists are compiled using available book sale data. The bestsellers-date may be significantly earlier than published-date. For additional information, see the explanation at the bottom of any best-seller list page on NYTimes.com (example: Hardcover Fiction, published Dec. 5 but reflecting sales to Nov. 29).
     * @param publishedDate YYYY-MM-DD
     *
     * The date the best sellers list was published on NYTimes.com (different than bestsellers-date).  Use "current" for latest list.
     * @param offset Sets the starting point of the result set (0, 20, ...).  Used to paginate thru books if list has more than 20. Defaults to 0.  The num_results field indicates how many books are in the list.
     * @returns any Best Sellers list books
     * @throws ApiError
     */
    public static getListsFormat(
        list: string = 'hardcover-fiction',
        bestsellersDate?: string,
        publishedDate?: string,
        offset?: number,
    ): CancelablePromise<{
        status?: string;
        copyright?: string;
        num_results?: number;
        last_modified?: string;
        results?: Array<{
            list_name?: string;
            display_name?: string;
            bestsellers_date?: string;
            published_date?: string;
            rank?: number;
            rank_last_week?: number;
            weeks_on_list?: number;
            asterisk?: number;
            dagger?: number;
            amazon_product_url?: string;
            isbns?: Array<{
                isbn10?: string;
                isbn13?: string;
            }>;
            book_details?: Array<{
                title?: string;
                description?: string;
                contributor?: string;
                author?: string;
                contributor_note?: string;
                price?: number;
                age_group?: string;
                publisher?: string;
                primary_isbn13?: string;
                primary_isbn10?: string;
            }>;
            reviews?: Array<{
                book_review_link?: string;
                first_chapter_link?: string;
                sunday_review_link?: string;
                article_chapter_link?: string;
            }>;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists.json',
            query: {
                'list': list,
                'bestsellers-date': bestsellersDate,
                'published-date': publishedDate,
                'offset': offset,
            },
        });
    }

    /**
     * Best Sellers List by Date
     * Get Best Sellers list by date.
     * @param date YYYY-MM-DD or "current"
     *
     * The date the best sellers list was published on NYTimes.com.  Use "current" to get latest list.
     * @param list Name of the Best Sellers List (e.g. hardcover-fiction). You can get the full list of names from the /lists/names.json service.
     * @param offset Sets the starting point of the result set (0, 20, ...).  Used to paginate thru books if list has more than 20. Defaults to 0.  The num_results field indicates how many books are in the list.
     * @returns any Best Sellers list books.
     * @throws ApiError
     */
    public static getListsDateListJson(
        date: string,
        list: string,
        offset?: number,
    ): CancelablePromise<{
        status?: string;
        copyright?: string;
        num_results?: number;
        last_modified?: string;
        results?: {
            list_name?: string;
            bestsellers_date?: string;
            published_date?: string;
            display_name?: string;
            normal_list_ends_at?: number;
            updated?: string;
            books?: Array<{
                rank?: number;
                rank_last_week?: number;
                weeks_on_list?: number;
                asterisk?: number;
                dagger?: number;
                primary_isbn10?: string;
                primary_isbn13?: string;
                publisher?: string;
                description?: string;
                price?: number;
                title?: string;
                author?: string;
                contributor?: string;
                contributor_note?: string;
                book_image?: string;
                amazon_product_url?: string;
                age_group?: string;
                book_review_link?: string;
                first_chapter_link?: string;
                sunday_review_link?: string;
                article_chapter_link?: string;
                isbns?: Array<{
                    isbn10?: string;
                    isbn13?: string;
                }>;
            }>;
            corrections?: Array<any>;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/{date}/{list}.json',
            path: {
                'date': date,
                'list': list,
            },
            query: {
                'offset': offset,
            },
        });
    }

    /**
     * Best Sellers List Full Overview
     * Get all books for all the Best Sellers lists for specified date.
     * @param publishedDate YYYY-MM-DD
     *
     * The best-seller list publication date.
     * You do not have to specify the exact date the list was published. The service will search forward (into the future) for the closest publication date to the date you specify. For example, a request for lists/overview/2013-05-22 will retrieve the list that was published on 05-26.
     *
     * If you do not include a published date, the current week's best sellers lists will be returned.
     * @returns OverviewResponse Full overview of Best Sellers lists.
     * @throws ApiError
     */
    public static getListsFullOverviewFormat(
        publishedDate?: string,
    ): CancelablePromise<OverviewResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/full-overview.json',
            query: {
                'published_date': publishedDate,
            },
        });
    }

    /**
     * Best Sellers List Overview
     * Get top 5 books for all the Best Sellers lists for specified date.
     * @param publishedDate YYYY-MM-DD
     *
     * The best-seller list publication date.
     * You do not have to specify the exact date the list was published. The service will search forward (into the future) for the closest publication date to the date you specify. For example, a request for lists/overview/2013-05-22 will retrieve the list that was published on 05-26.
     *
     * If you do not include a published date, the current week's best sellers lists will be returned.
     * @returns OverviewResponse Overview of Best Sellers lists.
     * @throws ApiError
     */
    public static getListsOverviewFormat(
        publishedDate?: string,
    ): CancelablePromise<OverviewResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/overview.json',
            query: {
                'published_date': publishedDate,
            },
        });
    }

    /**
     * Best Sellers List Names
     * Get Best Sellers list names.
     * @returns any Get Best Sellers list names.
     * @throws ApiError
     */
    public static getListsNamesFormat(): CancelablePromise<{
        status?: string;
        copyright?: string;
        num_results?: number;
        results?: Array<{
            list_name?: string;
            display_name?: string;
            list_name_encoded?: string;
            oldest_published_date?: string;
            newest_published_date?: string;
            updated?: 'WEEKLY' | 'MONTHLY';
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/names.json',
        });
    }

    /**
     * Best Sellers List History
     * Get Best Sellers list history.
     * @param ageGroup The target age group for the best seller.
     * @param author The author of the best seller. The author field does not include additional contributors (see Data Structure for more details about the author and contributor fields).
     *
     * When searching the author field, you can specify any combination of first, middle and last names.
     *
     * When sort-by is set to author, the results will be sorted by author's first name.
     * @param contributor The author of the best seller, as well as other contributors such as the illustrator (to search or sort by author name only, use author instead).
     *
     * When searching, you can specify any combination of first, middle and last names of any of the contributors.
     *
     * When sort-by is set to contributor, the results will be sorted by the first name of the first contributor listed.
     * @param isbn International Standard Book Number, 10 or 13 digits
     *
     * A best seller may have both 10-digit and 13-digit ISBNs, and may have multiple ISBNs of each type. To search on multiple ISBNs, separate the ISBNs with semicolons (example: 9780446579933;0061374229).
     * @param offset Sets the starting point of the result set (0, 20, ...).  Used to paginate thru results if there are more than 20. Defaults to 0. The num_results field indicates how many results there are total.
     * @param price The publisher's list price of the best seller, including decimal point.
     * @param publisher The standardized name of the publisher
     * @param title The title of the best seller
     *
     * When searching, you can specify a portion of a title or a full title.
     * @returns any Best Sellers list history
     * @throws ApiError
     */
    public static getListsBestSellersHistoryJson(
        ageGroup?: string,
        author?: string,
        contributor?: string,
        isbn?: string,
        offset?: number,
        price?: string,
        publisher?: string,
        title?: string,
    ): CancelablePromise<{
        status?: string;
        copyright?: string;
        num_results?: number;
        results?: Array<{
            title?: string;
            description?: string;
            contributor?: string;
            author?: string;
            contributor_note?: string;
            price?: number;
            age_group?: string;
            publisher?: string;
            isbns?: Array<{
                isbn10?: string;
                isbn13?: string;
            }>;
            ranks_history?: Array<{
                primary_isbn10?: string;
                primary_isbn13?: string;
                rank?: number;
                list_name?: string;
                display_name?: string;
                published_date?: string;
                bestsellers_date?: string;
                weeks_on_list?: number;
                ranks_last_week?: null;
                asterisk?: number;
                dagger?: number;
            }>;
            reviews?: Array<{
                book_review_link?: string;
                first_chapter_link?: string;
                sunday_review_link?: string;
                article_chapter_link?: string;
            }>;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lists/best-sellers/history.json',
            query: {
                'age-group': ageGroup,
                'author': author,
                'contributor': contributor,
                'isbn': isbn,
                'offset': offset,
                'price': price,
                'publisher': publisher,
                'title': title,
            },
        });
    }

    /**
     * Reviews
     * Get book reviews.
     * @param isbn Searching by ISBN is the recommended method. You can enter 10- or 13-digit ISBNs.
     * @param title You’ll need to enter the full title of the book. Spaces in the title will be converted into the characters %20.
     * @param author You’ll need to enter the author’s first and last name, separated by a space. This space will be converted into the characters %20.
     * @returns any Book reviews.
     * @throws ApiError
     */
    public static getReviewsFormat(
        isbn?: number,
        title?: string,
        author?: string,
    ): CancelablePromise<{
        status?: string;
        copyright?: string;
        num_results?: number;
        results?: Array<{
            url?: string;
            publication_dt?: string;
            byline?: string;
            book_title?: string;
            book_author?: string;
            summary?: string;
            isbn13?: Array<string>;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/reviews.json',
            query: {
                'isbn': isbn,
                'title': title,
                'author': author,
            },
        });
    }

}
