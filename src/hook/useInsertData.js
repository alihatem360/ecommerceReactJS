import baseURL from "../API/baseURL";

const useInsertData = async (url, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const res = await baseURL.post(url, data, config);
  return res.data;
};

//  insert with image

const useInsertDataWithImage = async (url, data) => {
  //  insert with image and header with token from local storage
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseURL.post(url, data, config);
  return res;
};

export { useInsertData, useInsertDataWithImage };
