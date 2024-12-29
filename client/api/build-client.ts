import axios, { AxiosRequestConfig } from "axios";

export default ({ req }: { req: AxiosRequestConfig }) => {
  if (typeof window === "undefined") {
    return axios.create({
      baseURL:
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
      headers: req.headers,
    });
  }

  return axios.create();
};
