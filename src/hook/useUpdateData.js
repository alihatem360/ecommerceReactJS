import baseURL from "../API/baseURL";

// update data without image
const useUpdateData = async (url, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseURL.put(url, data, config);
  return res.data;
};

//  insert with image
const useUpdateDataWithImage = async (url, data) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseURL.put(url, data, config);
  return res;
};

export { useUpdateData, useUpdateDataWithImage };
