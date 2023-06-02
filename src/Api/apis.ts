import { getApi, postApi } from "./baseApi";
import {
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import * as T from "interface";

// 식당리스트
export const getRTListApi = (search: string, page: number) => {
  const url = `rt?name=${search}&offset=${page}&limit=20`;
  const data: UseQueryResult<{ data: T.RT[] }, unknown> = useQuery(
    ["GetRTListApi"],
    () => getApi(url)
  );
  return data;
};

// 식당리스트 axios
export const getRTListApi = (search: string, page: number) => {
  const url = `rt?name=${search}&offset=${page}&limit=20`;
  const data: Promise<{ data: T.RT[] }> = getApi(url);
  return data;
};

// 식당 상세
export const GetRTDetailApi = (storeIdx: number) => {
  const url = `rt/${storeIdx}`;
  const data: UseQueryResult<{ data: T.RTDetailWithfeedback }, unknown> =
    useQuery(["GetRTDetailApi", storeIdx], () => getApi(url));
  const data: Promise<T.Res<T.RT[]>> = getApi(url);
  return data;
};

// 식당제보
export const postRTApi = (body: T.PostRT) => {
  const url = `rt`;
  const data: Promise<T.Res<T.RT[]>> = postApi(url, body);
  return data;
};
