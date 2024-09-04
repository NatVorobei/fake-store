import { baseUrl } from "../../utils/vars";
import { productsTypes } from "../types/productsTypes";

export function getProducts(products){
    return {
        type: productsTypes.GET_PRODUCTS,
        payload: products
    }
}

export function getProductsAsync(){
    return async function(dispatch) {
        const result = await fetch(`${baseUrl}products`);
        const data = await result.json();

        dispatch(getProducts(data));
    }
}