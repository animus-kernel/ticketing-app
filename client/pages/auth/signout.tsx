"use client";

import React, { useEffect } from "react";
import { useRequest } from "../../hooks/useRequest";
import Router from "next/router";

const signout = () => {
  const { doRequest } = useRequest({
    onSuccess: () => Router.push("/"),
  });

  useEffect(() => {
    doRequest({
      url: "/api/users/signout",
      method: "post",
      body: {},
    });
  }, []);

  return <div>Signing out...</div>;
};

export default signout;
