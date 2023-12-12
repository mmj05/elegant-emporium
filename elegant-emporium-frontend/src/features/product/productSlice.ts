// src/features/product/productSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';

interface ProductState {
  products: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

interface Product {
  id: string;
  name: string;
  price: number;
  gender: string;
  category: string;
  description: string;
  image: string;
  quantity: number;
}

const initialState: ProductState = {
  products: [],
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/products');
    return response.data._embedded.products;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
});

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // Other synchronous actions if needed
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const selectProducts = (state: RootState) => state.product.products;
export const selectProductsStatus = (state: RootState) => state.product.status;
export const selectProductsError = (state: RootState) => state.product.error;

export default productSlice.reducer;
