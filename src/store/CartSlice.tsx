import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { AppThunk } from '.';

export interface ICart {
    items: any[];
    total: number;
}

const initialState: ICart = {
    items: [],
    total: 0
};

export const Cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        calculateTotal: (state) => {
            let totalVar: number = 0;
            state.items.forEach((item, index) => {
                totalVar = totalVar + parseFloat(item.price);
            });
            state.total = totalVar;
        },
        addCartItem: (state, action) => {
            let itemStatus = 'new';
            if (state.items.length) {
                state.items.forEach((item, index) => {
                    if (item.id == action.payload.id) {
                        state.items[index] = action.payload;
                        itemStatus = "exist"
                    }
                })
            }
            if (itemStatus == "new") {
                state.items.push(action.payload);
            }
        },
    }
})


export const { calculateTotal, addCartItem } = Cart.actions;


export default Cart.reducer;
