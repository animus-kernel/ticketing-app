import express, { Request, Response } from "express";
import { body } from "express-validator";

const router = express.Router();

router.get(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Must be a valid email."),
    body("password")
      .trim()
      .isLength({ min: 8, max: 20 })
      .withMessage("The password must be between 8 and 20 characters long."),
  ],
  (req: Request, res: Response) => {
    res.send("Hello, signup user!");
  }
);

export { router };
