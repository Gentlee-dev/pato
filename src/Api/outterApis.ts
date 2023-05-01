import axios, { AxiosResponse } from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

// ip체크
export const GetIpApi = () => {
  return useQuery([GetIpApi], () =>
    axios.get(`https://api.ipify.org?callback=?`, {}).then(({ data }) => data)
  );
};
