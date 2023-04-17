import { createReducer } from "@reduxjs/toolkit"; 

const initialState = {
    c : 0,
};

export const  customReducer = createReducer(initialState, {

    Increament: (state) => {
        state.c += 1;
    },
    IncrementByValue: (state, action) => {
        state.c += action.payload;
    },
    Decreament: (state) => {
        state.c -= 1;
    },
});

