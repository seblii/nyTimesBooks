import { DefaultService } from "./nyTimesClient";

type FunctionType = (...args: any[]) => any;

const CACHE: any = {};
const HOUR_AS_MS = 3600000;

function cacheFunction<T extends FunctionType>(fn: T): T {
    return function (...args: any[]) {
        const key: string = JSON.stringify(args);
        const timestamp = new Date().getTime();
        const isCached = (CACHE[key] && timestamp - CACHE[key]["timestamp"] < HOUR_AS_MS);

        if (!isCached) {
            CACHE[key] = { "response": fn(...args), timestamp };
        } else {
            console.log("Response from cache.");
        }

        return CACHE[key]["response"];
    } as T;
}

class NYTimesClientWithCache {
    apiKey: string = "";

    constructor(apiKey: string) {
        if (!apiKey) {
            throw new Error("NYT_API_KEY must be given!");
        }

        this.apiKey = apiKey;
    }

    getListsNamesFormat = cacheFunction(async () => {
        return await DefaultService.getListsNamesFormat(this.apiKey);
    })

    getListsDateListJson = cacheFunction(async (encodedListName: string) => {
        return await DefaultService.getListsDateListJson("current", encodedListName, this.apiKey);
    })

    getReviewsFormat = cacheFunction(async (isbn: number) => {
        return await DefaultService.getReviewsFormat(this.apiKey, isbn);
    })

}

export default NYTimesClientWithCache;
