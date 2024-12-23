import { ValidationError } from "express-validator";
import { CustomError } from "./custom_error";

export class RequestValidationError extends CustomError {
  public statusCode = 400;

  constructor(private errors: ValidationError[]) {
    // this message is for logging purposes only (the user does not see it).
    super("Invalid input parameters");

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  public serializeErrors() {
    return this.errors.map((err) => ({
      message: err.msg,
    }));
  }
}
