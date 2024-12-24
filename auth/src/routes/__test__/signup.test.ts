import request from "supertest";
import { app } from "../../app";

it("returns a 201 on valid user signup", () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "animus@gmail.com",
      password: "12345678",
    })
    .expect(201);
});

it("returns a 400 on invalid email", () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "animusgmail.com",
      password: "12345678",
    })
    .expect(400);
});

it("returns a 400 on invalid password", () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "animus@gmail.com",
      password: "12",
    })
    .expect(400);
});

it("returns a 400 on missing email AND password", () => {
  return request(app).post("/api/users/signup").send({}).expect(400);
});

it("returns a 400 on missing email OR password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "animus@gmail.com",
    })
    .expect(400);

  await request(app)
    .post("/api/users/signup")
    .send({
      password: "12345678",
    })
    .expect(400);
});

it("disallows duplicate email creation", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "animus@gmail.com",
      password: "12345678",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signup")
    .send({
      email: "animus@gmail.com",
      password: "12345678",
    })
    .expect(400);
});

it("sets cookies on successful signup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "animus@gmail.com",
      password: "12345678",
    })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});
