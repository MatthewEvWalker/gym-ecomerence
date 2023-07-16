import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isCartOpen: false,
    cart: [],
    items: [],
}

export const cartSlice = ({
    name: "cart",
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },

        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload.item]
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filert((item) => item.id !== action.payload)
        }, 

        increaseCount: (state, action) => {
            state.cart = state.cart.map((item))
        }
    }
});

export const {
    setItems
} = cartSlice.actions;

export default cartSlice.reducer

