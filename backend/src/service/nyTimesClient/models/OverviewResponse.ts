/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OverviewResponse = {
    status?: string;
    copyright?: string;
    num_results?: number;
    results?: {
        bestsellers_date?: string;
        published_date?: string;
        lists?: Array<{
            list_id?: number;
            list_name?: string;
            display_name?: string;
            updated?: string;
            list_image?: string;
            books?: Array<{
                age_group?: string;
                author?: string;
                contributor?: string;
                contributor_note?: string;
                created_date?: string;
                description?: string;
                price?: number;
                primary_isbn13?: string;
                primary_isbn10?: string;
                publisher?: string;
                rank?: number;
                title?: string;
                updated_date?: string;
            }>;
        }>;
    };
};

