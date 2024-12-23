import { CustomError } from "./custom_error";

export class NotFoundError extends CustomError {
    public statusCode: number = 404;

    constructor() {
        super("Route not found");

        Object.setPrototypeOf(this, NotFoundError.prototype)
    }


    public serializeErrors(): { message: string; }[] {
        return [{message: "Not found"}]
    }
}