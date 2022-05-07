"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerError extends Error {
    status;
    error;
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, ServerError);
        this.status = args[0].status;
        this.error = args[0].error;
    }
}
exports.default = ServerError;
