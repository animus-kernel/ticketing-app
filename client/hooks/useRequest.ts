import axios, { Method } from "axios";
import { useCallback, useMemo, useState } from "react";

interface IUseRequestProps<T> {
  onSuccess(data: T): void;
}

interface IDoRequest {
  url: string;
  method: Method;
  body: any;
}

export function useRequest<T extends Record<string, any>>({
  onSuccess,
}: IUseRequestProps<T>) {
  const [errors, setErrors] = useState([]);

  const doRequest = useCallback(async ({ url, method, body }: IDoRequest) => {
    try {
      setErrors([]);
      const response = await axios.request({
        url,
        method,
        data: body,
      });

      if (onSuccess) {
        return onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setErrors(err.response?.data?.errors || []);
      } else {
        console.error("Unexpected error:", err);
      }
    }
  }, []);

  return useMemo(() => ({ doRequest, errors }), [doRequest, errors]);
}
