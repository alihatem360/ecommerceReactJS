import {
  GEARTE_PRODUCT,
  GET_ERROR,
  GET_ALL_PRODUCT,
  GET_PRODUCT_DETAILS,
  GET_RELATED_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_ALL_PRODUCTBY_CATEGORY,
  GET_ALL_PRODUCTBY_BRAND,
} from "../types/categorytypes";
import { useInsertDataWithImage } from "../../hook/useInsertData";
import { useGetData } from "../../hook/useGetData";
import useDeleteDtat from "../../hook/useDeleteDtat";
import { useUpdateDataWithImage } from "../../hook/useUpdateData";
// ==================  create product ==================
export const createProduct = (formData) => async (dispatch) => {
  try {
    const respons = await useInsertDataWithImage("/api/v1/products", formData);
    dispatch({ type: GEARTE_PRODUCT, payload: respons });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Something went wrong" + error });
  }
};
// ==================  get all product ==================
export const getAllProduct = () => async (dispatch) => {
  try {
    const respons = await useGetData(`/api/v1/products`);
    dispatch({ type: GET_ALL_PRODUCT, payload: respons });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Something went wrong" + error });
  }
};

// ==================  get all product with pagination ==================

export const getAllProductPage = (page, limitPage) => async (dispatch) => {
  try {
    const respons = await useGetData(
      `/api/v1/products?limit=${limitPage}&page=${page} `
    );
    dispatch({ type: GET_ALL_PRODUCT, payload: respons });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Something went wrong" + error });
  }
};

// ==================  get Specific product ==================
export const getProductDetails = (id) => async (dispatch) => {
  try {
    const respons = await useGetData(`/api/v1/products/${id}`);
    dispatch({ type: GET_PRODUCT_DETAILS, payload: respons.data });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Something went wrong" + error });
  }
};

// ==================  get related product ==================

export const getRelatedProduct = (id) => async (dispatch) => {
  try {
    const respons = await useGetData(`/api/v1/products?category[in][]=${id}`);
    dispatch({
      type: GET_RELATED_PRODUCT,
      payload: respons.data.data,
      loading: true,
    });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Something went wrong" + error });
  }
};

// ==================  delete product ==================

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const respons = await useDeleteDtat(`/api/v1/products/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: respons.data.data,
      loading: true,
    });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Something went wrong" + error });
  }
};

// ==================  update product ==================

export const updateProduct = (id, formData) => async (dispatch) => {
  try {
    const respons = await useUpdateDataWithImage(
      `/api/v1/products/${id}`,
      formData
    );
    dispatch({ type: UPDATE_PRODUCT, payload: respons, loading: true });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Something went wrong" + error });
  }
};

//  ==================  get all products with query Search ==================

export const getAllProductSearch = (query) => async (dispatch) => {
  try {
    const respons = await useGetData(`/api/v1/products?${query}`);
    dispatch({ type: GET_ALL_PRODUCT, payload: respons, loading: true });
  } catch (error) {
    dispatch({ type: GET_ERROR, payload: "Something went wrong" + error });
  }
};

//  ==================  get all products by category ==================

export const getAllProductByCategory =
  (limit, page, categoryId) => async (dispatch) => {
    try {
      const respons = await useGetData(
        `/api/v1/products?limit=${limit}&page=${page}&category=${categoryId}`
      );
      dispatch({ type: GET_ALL_PRODUCTBY_CATEGORY, payload: respons });
    } catch (error) {
      dispatch({
        type: GET_ALL_PRODUCTBY_CATEGORY,
        payload: error,
      });
    }
  };

//  ==================  get all products by brand ==================

export const getAllProductByBrand =
  (limit, page, brandId) => async (dispatch) => {
    try {
      const respons = await useGetData(
        `/api/v1/products?limit=${limit}&page=${page}&brand=${brandId}`
      );
      dispatch({ type: GET_ALL_PRODUCTBY_BRAND, payload: respons });
    } catch (error) {
      dispatch({
        type: GET_ALL_PRODUCTBY_BRAND,
        payload: error,
      });
    }
  };
