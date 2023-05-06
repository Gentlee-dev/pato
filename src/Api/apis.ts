import { getApi } from "./baseApi";
import {
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import * as T from "interface";

// 식당리스트 react-query
export const GetRTListApi = (search: string, page: number) => {
  const url = `rt?name=${search}&offset=${page}&limit=20`;
  const data: UseQueryResult<{ data: T.Res<T.RT[]> }, unknown> = useQuery(
    ["GetRTListApi"],
    () => getApi(url)
  );
  return data;
};
// 식당리스트 axios
export const getRTListApi = (search: string, page: number) => {
  const url = `rt?name=${search}&offset=${page}&limit=20`;
  const data: Promise<{ data: T.Res<T.RT[]> }> = getApi(url);
  return data;
};
