
export interface BookList {
    list_name: string;
    display_name: string;
    list_name_encoded: string;
    oldest_published_date: Date;
    newest_published_date: Date;
    updated: string;
}

export interface ListNamesResponse {
    status: string;
    copyright: string;
    num_results: number;
    results: BookList[];
};