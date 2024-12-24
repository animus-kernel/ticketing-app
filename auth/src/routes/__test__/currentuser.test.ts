import request from "supertest";
import { app } from "../../app";
import { getAuthCookie } from "../../test/getAuthCookie";

it("returns the current user after successful authentication", async () => {
  const cookie = await getAuthCookie();

  const currUserResponse = await request(app)
    .get("/api/users/currentuser")
    .set("Cookie", cookie)
    .send()
    .expect(200);

  expect(currUserResponse.body.currentUser.email).toEqual("animus@gmail.com");
});

it("returns current user as null when not signed in", async () => {
  const response = await request(app)
    .get("/api/users/currentuser")
    .send()
    .expect(200);

  expect(response.body.currentUser).toEqual(null);
});
