import baseURL from "../API/baseURL";

const useDeleteData = async (url, params) => {
  const res = await baseURL.delete(url, params);
  return res;
};

export default useDeleteData;
