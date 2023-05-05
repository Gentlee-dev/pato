import axios, { AxiosResponse } from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const v1 = process.env.NEXT_PUBLIC_API_ENDPOINT;

// 에러status

// 변수로 작성시 getToken함수를 매번 실행하지 않음(최초 진입시 빈값)
const instance = () =>
  axios.create({
    baseURL: v1,
  });

const errorHandleApi = async (
  api: () => Promise<AxiosResponse<any, any>>
): Promise<any> => {
  return await api().catch((err: any) => {
    // 에러안의 데이터 접근
    // || {} 안쓰면 err.response.data 없을때 로직 끝남
    const { details = null, status = null } = err.response.data || {};
    details && alert(details);

    console.log(err);
    throw err;
  });
};

// get api
export const getApi = async (url: string) => {
  return errorHandleApi(() => instance().get(url));
};
// post api
export const postApi = async (url: string, body?: any) =>
  errorHandleApi(() => instance().post(url, body));

// put api
export const putApi = async (url: string, body: any) =>
  errorHandleApi(() => instance().put(url, body));

// delete api
export const deleteApi = async (url: string) =>
  errorHandleApi(() => instance().delete(url));

// ip체크
export const getIpApi = () => {
  const data = axios.get(`https://api.ipify.org?callback=?`, {});
  return data;
};
// 텔레그램 메세지
export const getTelegramApi = async (
  token: string,
  roomId: string,
  text: string | React.ReactNode
) => {
  await axios.get(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${roomId}&parse_mode=markdown&text=${text}`
  );
};

// ================================================ react-query ================================================
// ================================================ react-query ================================================
// ================================================ react-query ================================================

export const useGetQuery = (key: any, url: string) => {
  return useQuery(key, () => getApi(url).then(({ data }) => data));
};
export const usePostQuery = (key: any, url: string, body?: any) => {
  return useQuery(key, () => postApi(url, body).then(({ data }) => data));
};

export const usePutQuery = (key: any, url: string, body: any) => {
  const queryClient = useQueryClient();
  const data = putApi(url, body);
  queryClient.invalidateQueries(key);
  return data;
};
