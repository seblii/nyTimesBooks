import NYTimesClientWithCache from "./NYTimesClientWithCache";
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

class BestellersService {
    nytClient: NYTimesClientWithCache;

    constructor(apiKey: string) {
        if (!apiKey) {
            throw new Error("NYT_API_KEY must be given!");
        }

        this.nytClient = new NYTimesClientWithCache(apiKey);
    }

    async getBooklists(): Promise<BookList[]> {
        const rawResponse = await this.nytClient.getListsNamesFormat();
        const lists = rawResponse.results?.map(
            ({ list_name, display_name, list_name_encoded }) => {
                return { list_name, display_name, list_name_encoded };
            }
        );

        return lists ? lists : [];
    }

    async getBestsellersOfCategory(
        encodedListName: string
    ): Promise<Book[] | undefined> {
        const rawResponse = await this.nytClient.getListsDateListJson(encodedListName);

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

    async getBookReviewReferences(isbn: number): Promise<ReviewReference[]> {
        const rawResponse = await this.nytClient.getReviewsFormat(isbn);

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
