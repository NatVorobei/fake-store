import { productsTypes } from "../types/productsTypes";

const initialState = {
    products: [],
}

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case productsTypes.GET_PRODUCTS:
            let updatedProducts = action.payload.map(product => {
                let a = state.products.find(item => item.id === product.id);
                if(a) {
                    product.title = a.title
                }
                return product;
            })
            return {
                ...state,
                products: updatedProducts
            };
        case productsTypes.ADD_PRODUCT:
            // add action.payload to localstorage prod array
            return {
                ...state,
                products: [action.payload, ...state.products],
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