/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { categories } from '@/components/shared/Navbar';
import { TProduct } from '@/pages/api/models/productModel';

const initialState = categories;

const builderSlice = createSlice({
  name: 'builder',
  initialState,
  reducers: {
    addOrUpdateProduct: (state, action: PayloadAction<{ category: string; product: TProduct }>) => {
      const { category, product } = action.payload;
      const categoryIndex = state.findIndex((cat) => cat.link === category);
      if (categoryIndex !== -1) {
        state[categoryIndex].product = product;
      }
    },
  },
});

export const { addOrUpdateProduct } = builderSlice.actions;

export default builderSlice.reducer;
