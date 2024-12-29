import React from "react";
import buildClient from "../api/build-client";
import { AxiosRequestConfig } from "axios";

export default function landingPage({
  currentUser,
}: {
  currentUser: Object | null;
}) {
  const signinStatus = currentUser
    ? "You are signed in."
    : "You are NOT signed in.";
  return <h1>{signinStatus}</h1>;
}

landingPage.getInitialProps = async (context: { req: AxiosRequestConfig }) => {
  const client = buildClient(context);

  const { data } = await client.get("/api/users/currentuser");

  return data;
};
