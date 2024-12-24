import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import {
  currentuserRouter,
  signinRouter,
  signoutRouter,
  signupRouter,
} from "./routes";
import { errorHandler } from "./middlewares";
import { NotFoundError } from "./errors";
import cookieSession from "cookie-session";

export const app = express();

// ingress-ngnix proxy
app.set("trust proxy", true);
app.use(json());

// Cookies will be the transport method of our JWTs
// signed: not encrypted
// secure: only set on https requests
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

// Routes
app.use(currentuserRouter);
app.use(signinRouter);
app.use(signupRouter);
app.use(signoutRouter);

//Not found route fallback
app.all("*", () => {
  throw new NotFoundError();
});

app.use(errorHandler);
