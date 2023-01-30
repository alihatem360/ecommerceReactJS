import baseURL from "../API/baseURL";

const useGetData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseURL.get(url, params, config);
  return res;
};

//  get data with token

const useGetDataWithToken = async (url) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseURL.get(url, config);
  return res;
};

export { useGetData, useGetDataWithToken };
