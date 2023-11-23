import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const { id, name, price, image, quantity = 1 } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ id, name, price, image, quantity });
      }
    },
    removeFromBasket: (state, action) => {
      const { id, quantity = 1 } = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        // Verifica se o item existe antes de tentar acessar sua propriedade 'id'
        state.items[existingItemIndex].quantity -= quantity;

        if (state.items[existingItemIndex].quantity <= 0) {
          state.items.splice(existingItemIndex, 1);
        }
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItemsWithId = (state, id) => {
  return state.basket.items.filter((item) => {
    return item.id === id;
  });
};

export const selectBasketItems = (state) => {
  return state.basket.items;
};

export const BasketTotal = (state) => {
  return state.basket.items.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default basketSlice.reducer;
