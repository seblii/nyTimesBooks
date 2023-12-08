import { DefaultService } from "./nyTimesClient";

type BookList = {
    list_name: string | undefined;
    display_name: string | undefined;
    list_name_encoded: string | undefined;
};

type Book = {
    rank: number | undefined;
    title: string | undefined;
    author: string | undefined;
    primary_isbn10: string | undefined;
    primary_isbn13: string | undefined;
    book_image: string | undefined;
};

type ReviewReference = {
    url: string | undefined;
    byline: string | undefined;
    summary: string | undefined;
};

type FunctionType = (...args: any[]) => any;

// TODO: Fix the cache
function cacheFunction<T extends FunctionType>(fn: T): T {
    let cache: any = {};
    return function (...args: any[]) {
        const key: string = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = fn(...args);
        } else {
            console.log("Response from cache.")
        }
        return cache[key];
    } as T;
}

class BestellersService {
    apiKey: string = "";

    constructor(apiKey: string) {
        if (!apiKey) {
            throw new Error("NYT_API_KEY must be given!");
        }

        this.apiKey = apiKey;
    }

    _getListsNamesFormat = cacheFunction(async () => {
        return await DefaultService.getListsNamesFormat(this.apiKey);
    })

    async getBooklists(): Promise<BookList[]> {
        const rawResponse = await this._getListsNamesFormat();
        const lists = rawResponse.results?.map(
            ({ list_name, display_name, list_name_encoded }) => {
                return { list_name, display_name, list_name_encoded };
            }
        );

        return lists ? lists : [];
    }

    _getListsDateListJson = cacheFunction(async (encodedListName: string) => {
        return await DefaultService.getListsDateListJson("current", encodedListName, this.apiKey);
    })

    async getBestsellersOfCategory(
        encodedListName: string
    ): Promise<Book[] | undefined> {
        const rawResponse = await this._getListsDateListJson(encodedListName);

        const books = rawResponse.results?.books?.map(
            ({ rank, title, author, primary_isbn10, primary_isbn13, book_image }) => {
                return {
                    rank,
                    title,
                    author,
                    primary_isbn10,
                    primary_isbn13,
                    book_image,
                };
            }
        );

        return books ? books : [];
    }

    _getReviewsFormat = cacheFunction(async (isbn: number) => {
        return await DefaultService.getReviewsFormat(this.apiKey, isbn);
    })

    async getBookReviewReferences(isbn: number): Promise<ReviewReference[]> {
        const rawResponse = await this._getReviewsFormat(isbn);

        const reviewRefs = rawResponse.results?.map(({ url, byline, summary }) => {
            return {
                url,
                byline,
                summary,
            };
        });
        return reviewRefs ? reviewRefs : [];
    }
}

export default BestellersService;
