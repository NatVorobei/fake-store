import { productsTypes } from "../types/productsTypes";

const initialState = {
    products: [],
}

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case productsTypes.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        case productsTypes.ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        default:
            return state;
    }
}