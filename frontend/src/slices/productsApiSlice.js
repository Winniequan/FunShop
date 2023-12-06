import { PRODUCT_URL } from "../consants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
     getProducts: builder.query({
        query: ()=>({
            url: PRODUCT_URL,
        }),
        keepUnusedDataFor: 5
     })
    }),
});

export const {useGetProductsQuery} = productsApiSlice;