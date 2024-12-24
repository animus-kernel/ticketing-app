import mongoose from "mongoose";
import { app } from "./app";

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
