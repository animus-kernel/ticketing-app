import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/build-client";
import { AxiosRequestConfig } from "axios";
import Header from "../components/Header";

export default function AppComponent({ Component, pageProps, currentUser }) {
  return (
    <>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </>
  );
}

AppComponent.getInitialProps = async (appContext: {
  ctx: { req: AxiosRequestConfig };
  Component: { getInitialProps: (arg0: any) => {} };
}) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
    ...data,
  };
};
