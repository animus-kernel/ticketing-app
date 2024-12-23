import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import {
  currentuserRouter,
  signinRouter,
  signoutRouter,
  signupRouter,
} from "./routes";
import { errorHandler } from "./middlewares/error_handler";
import { NotFoundError } from "./errors/not_found_error";
import mongoose from "mongoose";
import cookieSession from "cookie-session";

const app = express();

// ingress-ngnix proxy
app.set("trust proxy", true);
app.use(json());

// Cookies will be the transport method of our JWTs
// signed: not encrypted
// secure: only set on https requests
app.use(
  cookieSession({
    signed: false,
    secure: true,
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

async function start() {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT key env variable not defined.");
  }

  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Successfully connected to MongoDB!");
  } catch (err) {
    console.log(err);
  }

  app.listen(8080, () => {
    console.log("auth listening on port 8080");
  });
}

start();
