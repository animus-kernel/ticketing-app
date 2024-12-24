import { CustomError } from "./custom_error";

export class NotAuthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super("Not Authorized.");

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  public serializeErrors(): { message: string }[] {
    return [{ message: "Not authorized." }];
  }
}
