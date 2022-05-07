"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./inlineResponse200"), exports);
__exportStar(require("./inlineResponse2001"), exports);
__exportStar(require("./inlineResponse2001Results"), exports);
__exportStar(require("./inlineResponse2001ResultsBooks"), exports);
__exportStar(require("./inlineResponse2002"), exports);
__exportStar(require("./inlineResponse2002Results"), exports);
__exportStar(require("./inlineResponse2003"), exports);
__exportStar(require("./inlineResponse2003RanksHistory"), exports);
__exportStar(require("./inlineResponse2003Results"), exports);
__exportStar(require("./inlineResponse2004"), exports);
__exportStar(require("./inlineResponse2004Results"), exports);
__exportStar(require("./inlineResponse200BookDetails"), exports);
__exportStar(require("./inlineResponse200Isbns"), exports);
__exportStar(require("./inlineResponse200Results"), exports);
__exportStar(require("./inlineResponse200Reviews"), exports);
__exportStar(require("./overviewResponse"), exports);
__exportStar(require("./overviewResponseResults"), exports);
__exportStar(require("./overviewResponseResultsBooks"), exports);
__exportStar(require("./overviewResponseResultsLists"), exports);
const inlineResponse200_1 = require("./inlineResponse200");
const inlineResponse2001_1 = require("./inlineResponse2001");
const inlineResponse2001Results_1 = require("./inlineResponse2001Results");
const inlineResponse2001ResultsBooks_1 = require("./inlineResponse2001ResultsBooks");
const inlineResponse2002_1 = require("./inlineResponse2002");
const inlineResponse2002Results_1 = require("./inlineResponse2002Results");
const inlineResponse2003_1 = require("./inlineResponse2003");
const inlineResponse2003RanksHistory_1 = require("./inlineResponse2003RanksHistory");
const inlineResponse2003Results_1 = require("./inlineResponse2003Results");
const inlineResponse2004_1 = require("./inlineResponse2004");
const inlineResponse2004Results_1 = require("./inlineResponse2004Results");
const inlineResponse200BookDetails_1 = require("./inlineResponse200BookDetails");
const inlineResponse200Isbns_1 = require("./inlineResponse200Isbns");
const inlineResponse200Results_1 = require("./inlineResponse200Results");
const inlineResponse200Reviews_1 = require("./inlineResponse200Reviews");
const overviewResponse_1 = require("./overviewResponse");
const overviewResponseResults_1 = require("./overviewResponseResults");
const overviewResponseResultsBooks_1 = require("./overviewResponseResultsBooks");
const overviewResponseResultsLists_1 = require("./overviewResponseResultsLists");
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
let enumsMap = {
    "InlineResponse2002Results.UpdatedEnum": inlineResponse2002Results_1.InlineResponse2002Results.UpdatedEnum,
};
let typeMap = {
    "InlineResponse200": inlineResponse200_1.InlineResponse200,
    "InlineResponse2001": inlineResponse2001_1.InlineResponse2001,
    "InlineResponse2001Results": inlineResponse2001Results_1.InlineResponse2001Results,
    "InlineResponse2001ResultsBooks": inlineResponse2001ResultsBooks_1.InlineResponse2001ResultsBooks,
    "InlineResponse2002": inlineResponse2002_1.InlineResponse2002,
    "InlineResponse2002Results": inlineResponse2002Results_1.InlineResponse2002Results,
    "InlineResponse2003": inlineResponse2003_1.InlineResponse2003,
    "InlineResponse2003RanksHistory": inlineResponse2003RanksHistory_1.InlineResponse2003RanksHistory,
    "InlineResponse2003Results": inlineResponse2003Results_1.InlineResponse2003Results,
    "InlineResponse2004": inlineResponse2004_1.InlineResponse2004,
    "InlineResponse2004Results": inlineResponse2004Results_1.InlineResponse2004Results,
    "InlineResponse200BookDetails": inlineResponse200BookDetails_1.InlineResponse200BookDetails,
    "InlineResponse200Isbns": inlineResponse200Isbns_1.InlineResponse200Isbns,
    "InlineResponse200Results": inlineResponse200Results_1.InlineResponse200Results,
    "InlineResponse200Reviews": inlineResponse200Reviews_1.InlineResponse200Reviews,
    "OverviewResponse": overviewResponse_1.OverviewResponse,
    "OverviewResponseResults": overviewResponseResults_1.OverviewResponseResults,
    "OverviewResponseResultsBooks": overviewResponseResultsBooks_1.OverviewResponseResultsBooks,
    "OverviewResponseResultsLists": overviewResponseResultsLists_1.OverviewResponseResultsLists,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
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
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
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
            let instance = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
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
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    username = '';
    password = '';
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class HttpBearerAuth {
    accessToken = '';
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}
exports.HttpBearerAuth = HttpBearerAuth;
class ApiKeyAuth {
    location;
    paramName;
    apiKey = '';
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    accessToken = '';
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    username = '';
    password = '';
    applyToRequest(_) {
        // Do nothing
    }
}
exports.VoidAuth = VoidAuth;
