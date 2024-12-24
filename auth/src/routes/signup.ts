import express, { Request, Response } from "express";
import { body } from "express-validator";
import { User } from "../models/user";
import { BadRequestError } from "../errors/bad_request_error";
import jwt from "jsonwebtoken";
import { validateRequest } from "../middlewares/validate_request";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Must be a valid email."),
    body("password")
      .trim()
      .isLength({ min: 8, max: 20 })
      .withMessage("The password must be between 8 and 20 characters long."),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
      throw new BadRequestError("Email address in use.");
    }

    const newUser = User.build({
      email,
      password,
    });
    await newUser.save();

    const userToken = jwt.sign(
      {
        id: newUser._id,
        email: newUser.email,
      },
      // checked as the application starts up
      process.env.JWT_KEY!
    );

    req.session = {
      jwt: userToken,
    };

    res.status(201).send(newUser);
  }
);

export { router };
