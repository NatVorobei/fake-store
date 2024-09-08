import { productsTypes } from "../types/productsTypes";

const initialState = {
    // products: []
    products: JSON.parse(localStorage.getItem('products')) || [],
    createdProducts: JSON.parse(localStorage.getItem('createdProducts')) || []
}

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case productsTypes.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload.products
            };
        case productsTypes.ADD_PRODUCT:
            const newProductsList = [...state.products, action.payload];
            const newCreatedProductsList = [...state.createdProducts, action.payload];
            localStorage.setItem('products', JSON.stringify(newProductsList));
            localStorage.setItem('createdProducts', JSON.stringify(newCreatedProductsList));

            return {
                ...state,
                products: newProductsList,
                createdProducts: newCreatedProductsList 
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