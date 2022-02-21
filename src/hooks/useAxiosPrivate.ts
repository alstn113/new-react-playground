import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { authState } from "../store/auth";
import client from "../utils/axios";
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const authValue = useRecoilValue(authState);

  useEffect(() => {
    const requestIntercept = client.interceptors.request.use(
      (config) => {
        if (config.headers && !config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${authValue.access_token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = client.interceptors.response.use(
      (reponse) => reponse,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.reponse?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return client(prevRequest);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      client.interceptors.request.eject(requestIntercept);
      client.interceptors.response.eject(responseIntercept);
    };
  }, [authValue, refresh]);

  return client;
};

export default useAxiosPrivate;
