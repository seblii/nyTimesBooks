/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Book = {
    /**
     * The 10-digit International Standard Book Number, unique to each edition of the book.
     */
    primary_isbn10?: string;
    /**
     * The 13-digit International Standard Book Number, a longer version of ISBN10, also unique to each edition.
     */
    primary_isbn13?: string;
    /**
     * The official title of the book, as recognized by publishers and libraries.
     */
    title?: string;
    /**
     * The full name(s) of the author(s) who wrote the book, possibly including co-authors.
     */
    author?: string;
    /**
     * The URL of the book cover image, expected to be in standard web formats (like JPEG or PNG) with clear resolution.
     */
    book_image?: string;
};

