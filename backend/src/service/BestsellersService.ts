import { DefaultService } from "../api";

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

class BestellersService {
    apiKey: string = "";

    constructor(apiKey: string) {
        if (!apiKey) {
            throw new Error("NYT_API_KEY must be given!")
        }
        this.apiKey = apiKey;
    }

    async getBooklists(): Promise<BookList[]> {
        const rawResponse = await DefaultService.getListsNamesFormat(this.apiKey);
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
        if (!process.env.NYT_API_KEY) {
            throw new Error("NYT_API_KEY environment variable not set!");
        }
        const rawResponse = await DefaultService.getListsDateListJson(
            "current",
            encodedListName as string,
            this.apiKey
        );

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
}

export default BestellersService;
