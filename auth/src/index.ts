import express from "express";
import { json } from "body-parser";
import {
  currentuserRouter,
  signinRouter,
  signoutRouter,
  signupRouter,
} from "./routes";

const app = express();
app.use(json());

// Routes
app.use(currentuserRouter);
app.use(signinRouter);
app.use(signupRouter);
app.use(signoutRouter);

app.listen(8080, () => {
  console.log("auth listening on port 8080");
});
