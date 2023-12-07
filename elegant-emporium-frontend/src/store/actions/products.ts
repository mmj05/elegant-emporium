import axios from "axios";

// Define action types
export const enum ProductsActionTypes {
    FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE',
}

// Define product interface
export interface Product {
    id: number;
    name: string;
    price: number;
    gender: string;
    category: string;
    description: string;
    image: string;
    quantity: number;
}

// Define action creators
export const fetchProductsRequest = () => ({
    type: ProductsActionTypes.FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products: Product[]) => ({
    type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: {
        products,
    },
});

export const fetchProductsFailure = (error: string) => ({
    type: ProductsActionTypes.FETCH_PRODUCTS_FAILURE,
    payload: {
        error,
    },
});

export const fetchProducts = () => async (dispatch: (arg0: { type: ProductsActionTypes; payload?: { products: Product[]; } | { error: string; }; }) => void) => {
    dispatch(fetchProductsRequest());
  
    try {
      const response = await axios.get("http://localhost:8080/api/products");
      const products = response.data;
  
      dispatch(fetchProductsSuccess(products));
    } catch (error: any) {
      dispatch(fetchProductsFailure(error.message));
    }
  };