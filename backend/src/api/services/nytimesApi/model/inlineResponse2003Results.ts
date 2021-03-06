/**
 * Books API
 * The Books API provides information about book reviews and The New York Times Best Sellers lists.  ## Best Sellers Lists Services ### List Names The lists/names service returns a list of all the NYT Best Sellers Lists.  Some lists are published weekly and others monthly.  The response includes when each list was first published and last published.  ``` /lists/names.json ```  ### List Data  The lists/{date}/{name} service returns the books on the best sellers list for the specified date and list name.  ``` /lists/2019-01-20/hardcover-fiction.json ```  Use \"current\" for {date} to get the latest list. ``` /lists/current/hardcover-fiction.json ```  ## Book Reviews Services  The book reviews service lets you get NYT book review by author, ISBN, or title.  ``` /reviews.json?author=Michelle+Obama ```  ``` /reviews.json?isbn=9781524763138 ```  ``` /reviews.json?title=Becoming ```  ## Example Calls  ``` https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yourkey ```  ``` https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=yourkey ``` 
 *
 * The version of the OpenAPI document: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { InlineResponse2003RanksHistory } from './inlineResponse2003RanksHistory';
import { InlineResponse200Isbns } from './inlineResponse200Isbns';
import { InlineResponse200Reviews } from './inlineResponse200Reviews';

export class InlineResponse2003Results {
    'title'?: string;
    'description'?: string;
    'contributor'?: string;
    'author'?: string;
    'contributorNote'?: string;
    'price'?: number;
    'ageGroup'?: string;
    'publisher'?: string;
    'isbns'?: Array<InlineResponse200Isbns>;
    'ranksHistory'?: Array<InlineResponse2003RanksHistory>;
    'reviews'?: Array<InlineResponse200Reviews>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "contributor",
            "baseName": "contributor",
            "type": "string"
        },
        {
            "name": "author",
            "baseName": "author",
            "type": "string"
        },
        {
            "name": "contributorNote",
            "baseName": "contributor_note",
            "type": "string"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number"
        },
        {
            "name": "ageGroup",
            "baseName": "age_group",
            "type": "string"
        },
        {
            "name": "publisher",
            "baseName": "publisher",
            "type": "string"
        },
        {
            "name": "isbns",
            "baseName": "isbns",
            "type": "Array<InlineResponse200Isbns>"
        },
        {
            "name": "ranksHistory",
            "baseName": "ranks_history",
            "type": "Array<InlineResponse2003RanksHistory>"
        },
        {
            "name": "reviews",
            "baseName": "reviews",
            "type": "Array<InlineResponse200Reviews>"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2003Results.attributeTypeMap;
    }
}

