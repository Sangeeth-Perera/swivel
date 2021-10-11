import { createSlice } from '@reduxjs/toolkit';

export interface ICart {
    items: any[];
    filteredItems: any[];
}

const initialState: ICart = {
    items: [],
    filteredItems: []
};

export const Items = createSlice({
    name: 'item',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items=action.payload;
        },
        setFilteredItems: (state, action) => {
            state.filteredItems=action.payload;
        },
    }
})


export const { setItems, setFilteredItems } = Items.actions;


export default Items.reducer;
