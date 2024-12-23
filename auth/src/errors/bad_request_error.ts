import { CustomError } from "./custom_error";

export class BadRequestError extends CustomError {
  public statusCode: number = 400;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  public serializeErrors(): { message: string }[] {
    return [
      {
        message: this.message,
      },
    ];
  }
}
