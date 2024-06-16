import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const productAdapter = createEntityAdapter();

const initialState = productAdapter.getInitialState();

export const extendedProductsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
      transformResponse: (response) => {
        let loadedData = response.products.map((product) => {
          if (!product.qty) product.qty = 1;
          return product;
        });

        //console.log("response", /*  response.products */ loadedData);
        return productAdapter.setAll(initialState, loadedData);
      },
      providesTags: (result, error, arg) => [
        { types: "Products", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Products", id })),
      ],
    }),
    getSingleProduct: builder.query({
      query: (id) => `products/${id}`,
      transformResponse: (response) => {
        return { ...response, qty: 1 };
      },
    }),
    getAllCategories: builder.query({
      query: () => "products/category-list",
    }),
    getSingleCategory: builder.query({
      query: (category) => `products/category/${category}`,
      transformResponse: (response) => {
        let loadedData = response.products.map((product) => {
          if (!product.qty) product.qty = 1;
          return product;
        });
        return productAdapter.setAll(initialState, loadedData);
      },
      providesTags: (result, error, arg) => [
        { types: "Products", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Products", id })),
      ],
    }),
    getSearchResult: builder.query({
      query: (item) => `products/search?q=${item}`,
      transformResponse: (response) => {
        let loadedData = response.products.map((product) => {
          if (!product.qty) product.qty = 1;
          return product;
        });
        return productAdapter.setAll(initialState, loadedData);
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetAllCategoriesQuery,
  useGetSingleCategoryQuery,
  useGetSingleProductQuery,
  useGetSearchResultQuery,
  /* useGetSingleProductQuery, */
} = extendedProductsSlice;

export const selectProductsResult =
  extendedProductsSlice.endpoints.getAllProducts.select();

const selectProductsData = createSelector(
  selectProductsResult,
  (productResult) => productResult.data
);

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductstIds,
} = productAdapter.getSelectors(
  (state) => selectProductsData(state) ?? initialState
);
