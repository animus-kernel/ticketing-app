import request from "supertest";
import { app } from "../app";

export async function getAuthCookie() {
  const email = "animus@gmail.com";
  const password = "12345678";

  const response = await request(app)
    .post("/api/users/signup")
    .send({ email, password })
    .expect(201);

  const cookie = response.get("Set-Cookie");

  return cookie || [];
}
