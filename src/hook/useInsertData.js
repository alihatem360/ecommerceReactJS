import baseURL from "../API/baseURL";

const useInsertData = async (url, data) => {
  const res = await baseURL.post(url, data);
  return res.data;
};

//  insert with image

const useInsertDataWithImage = async (url, data) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const res = await baseURL.post(url, data, config);
  return res;
};

export { useInsertData, useInsertDataWithImage };
