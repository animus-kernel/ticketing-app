import { body } from "express-validator";
import express, { Request, Response } from "express";
import { validateRequest } from "../middlewares/validate_request";
import { User } from "../models/user";
import { BadRequestError } from "../errors/bad_request_error";
import { PasswordManager } from "../utils/password_manager";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("Invalid email address."),
    body("password").trim().notEmpty().withMessage("Invalid password."),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new BadRequestError("Invalid credentials.");
    }

    const isPasswordValid = await PasswordManager.compare(
      existingUser.password,
      password
    );
    if (!isPasswordValid) {
      throw new BadRequestError("Invalid credentials.");
    }

    const userToken = jwt.sign(
      {
        id: existingUser._id,
        email: existingUser.email,
      },
      // checked as the application starts up
      process.env.JWT_KEY!
    );

    req.session = {
      jwt: userToken,
    };

    res.status(200).send(existingUser);
  }
);

export { router };
