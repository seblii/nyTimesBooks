import { DefaultApi } from "../api";

class NYTimesClient {
    private static api: DefaultApi;

    private constructor() {}
    
    public static get() {
        if (!NYTimesClient.api) {
            NYTimesClient.api = new DefaultApi();
        }

        return NYTimesClient.api;
    }
}

export default NYTimesClient.get();