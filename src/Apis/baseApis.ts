import axios from "axios";

const endPoint = process.env.REACT_APP_END_POINT;

// ================================================ 웹 api ================================================
// ================================================ 웹 api ================================================
// ================================================ 웹 api ================================================

// get api
export const getApi = async (url: string, params: any) => {
  const data = await axios.get(`${endPoint}${url}`, {
    params,
  });

  return data;
};

// post api
export const postApi = async (url: string, body?: any) => {
  const data = await axios.post(`${endPoint}${url}`, body);
  return data;
};

// put api
export const putApi = async (url: string, body: any) => {
  const data = await axios.put(`${endPoint}${url}`, body);
  return data;
};

// delete api
export const deleteApi = async (url: string) => {
  const data = await axios.delete(`${endPoint}${url}`);
  return data;
};

// ip체크
export const getIpApi = () => {
  const data = axios.get(`https://api.ipify.org?callback=?`, {});
  return data;
};
