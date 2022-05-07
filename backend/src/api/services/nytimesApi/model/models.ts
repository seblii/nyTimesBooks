// @ts-nocheck
import localVarRequest from 'request';

export * from './inlineResponse200';
export * from './inlineResponse2001';
export * from './inlineResponse2001Results';
export * from './inlineResponse2001ResultsBooks';
export * from './inlineResponse2002';
export * from './inlineResponse2002Results';
export * from './inlineResponse2003';
export * from './inlineResponse2003RanksHistory';
export * from './inlineResponse2003Results';
export * from './inlineResponse2004';
export * from './inlineResponse2004Results';
export * from './inlineResponse200BookDetails';
export * from './inlineResponse200Isbns';
export * from './inlineResponse200Results';
export * from './inlineResponse200Reviews';
export * from './overviewResponse';
export * from './overviewResponseResults';
export * from './overviewResponseResultsBooks';
export * from './overviewResponseResultsLists';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { InlineResponse200 } from './inlineResponse200';
import { InlineResponse2001 } from './inlineResponse2001';
import { InlineResponse2001Results } from './inlineResponse2001Results';
import { InlineResponse2001ResultsBooks } from './inlineResponse2001ResultsBooks';
import { InlineResponse2002 } from './inlineResponse2002';
import { InlineResponse2002Results } from './inlineResponse2002Results';
import { InlineResponse2003 } from './inlineResponse2003';
import { InlineResponse2003RanksHistory } from './inlineResponse2003RanksHistory';
import { InlineResponse2003Results } from './inlineResponse2003Results';
import { InlineResponse2004 } from './inlineResponse2004';
import { InlineResponse2004Results } from './inlineResponse2004Results';
import { InlineResponse200BookDetails } from './inlineResponse200BookDetails';
import { InlineResponse200Isbns } from './inlineResponse200Isbns';
import { InlineResponse200Results } from './inlineResponse200Results';
import { InlineResponse200Reviews } from './inlineResponse200Reviews';
import { OverviewResponse } from './overviewResponse';
import { OverviewResponseResults } from './overviewResponseResults';
import { OverviewResponseResultsBooks } from './overviewResponseResultsBooks';
import { OverviewResponseResultsLists } from './overviewResponseResultsLists';

/* tslint:disable:no-unused-variable */
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];

let enumsMap: { [index: string]: any } = {
    "InlineResponse2002Results.UpdatedEnum": InlineResponse2002Results.UpdatedEnum,
}

let typeMap: { [index: string]: any } = {
    "InlineResponse200": InlineResponse200,
    "InlineResponse2001": InlineResponse2001,
    "InlineResponse2001Results": InlineResponse2001Results,
    "InlineResponse2001ResultsBooks": InlineResponse2001ResultsBooks,
    "InlineResponse2002": InlineResponse2002,
    "InlineResponse2002Results": InlineResponse2002Results,
    "InlineResponse2003": InlineResponse2003,
    "InlineResponse2003RanksHistory": InlineResponse2003RanksHistory,
    "InlineResponse2003Results": InlineResponse2003Results,
    "InlineResponse2004": InlineResponse2004,
    "InlineResponse2004Results": InlineResponse2004Results,
    "InlineResponse200BookDetails": InlineResponse200BookDetails,
    "InlineResponse200Isbns": InlineResponse200Isbns,
    "InlineResponse200Results": InlineResponse200Results,
    "InlineResponse200Reviews": InlineResponse200Reviews,
    "OverviewResponse": OverviewResponse,
    "OverviewResponseResults": OverviewResponseResults,
    "OverviewResponseResultsBooks": OverviewResponseResultsBooks,
    "OverviewResponseResultsLists": OverviewResponseResultsLists,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: { [index: string]: any } = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
