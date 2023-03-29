import { deleteApi, getApi, postApi, putApi } from "./baseApis";
import * as T from "types/interface.d";
import { AxiosResponse } from "axios";

// Restanrant;

// 토큰검증
export const getRestaurantListApi = (parmas: T.GetRestaurantListApiParams) => {
  const url = `restaurants`;
  const data: Promise<
    AxiosResponse<{ status: string; message: string; data: T.Restanrant[] }>
  > = getApi(url, parmas);
  return data;
};
// 기업회원가입 중복체크
export const getJoinOverLapApi = (body: any) => {
  const url = `enterprises/duplication-id`;
  const data = putApi(url, body);
  return data;
};

// 개인정보수정
export const putUserInfoApi = (body: any) => {
  const url = `enterprises/profiles`;
  const data = postApi(url, body);
  return data;
};

// 템플릿 삭제
export const delTempleteApi = (idx: number) => {
  const url = `qna/templates/${idx}`;
  const data = deleteApi(url);
  return data;
};
