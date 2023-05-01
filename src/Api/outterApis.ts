import axios, { AxiosResponse } from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

// ip체크
export const getIpApi = (search: string) => {
  const data = axios.get(
    `https://dapi.kakao.com/v2/local/search/address.json?query=${search}`,
    {
      headers: {
        Authorization: `KakaoAK 375b3d165e437d325880d368034d9bad`,
      },
    }
  );
  return data;
};
