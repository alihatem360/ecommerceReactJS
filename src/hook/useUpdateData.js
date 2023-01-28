import baseURL from "../API/baseURL";

// update data without image
const useUpdateData = async (url, data) => {
  const res = await baseURL.put(url, data);
  return res.data;
};

//  insert with image
const useUpdateDataWithImage = async (url, data) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const res = await baseURL.put(url, data, config);
  return res;
};

export { useUpdateData, useUpdateDataWithImage };
