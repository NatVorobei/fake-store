import { productsTypes } from "../types/productsTypes";

const initialState = {
    products: []
    // products: JSON.parse(localStorage.getItem('products')) || [],
}

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case productsTypes.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload.products
            };
        case productsTypes.ADD_PRODUCT:
            // const newProductList = [...state.products, action.payload];
            // const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
            // localStorage.setItem('products', JSON.stringify([...existingProducts, action.payload]));

            // return {
            //     ...state,
            //     products: newProductList,
            // };
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case productsTypes.UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload.id ? action.payload : product
                )
            };
        case productsTypes.DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            };
        default:
            return state;
    }
}