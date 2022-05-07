class ServerError extends Error {
  status: any;
  error: any;
  constructor(...args: any[]) {
    super(...args);
    Error.captureStackTrace(this, ServerError);
    this.status = args[0].status;
    this.error = args[0].error;
  }
}

export default ServerError;