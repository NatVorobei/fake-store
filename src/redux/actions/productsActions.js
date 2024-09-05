// import { baseUrl } from "../../utils/vars";
import { productsTypes } from "../types/productsTypes";

export function getProducts(products){
    return {
        type: productsTypes.GET_PRODUCTS,
        payload: products
    }
}

export function addProduct(product){
    return {
        type: productsTypes.ADD_PRODUCT,
        payload: product
    }
}

export function getProductsAsync(count){
    return async function(dispatch) {
        const result = await fetch('./products.json');
        // const result = await fetch(`${baseUrl}products`);
        const data = await result.json();
        const limitedData = data.slice(0, count);

        dispatch(getProducts(limitedData));
    }
}

// export function addProductAsync(product) {
//     return async function(dispatch) {
//         try {
//             const response = await fetch('./products.json', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(product),
//             });

//             if (response.ok) {
//                 const newProduct = await response.json();
//                 dispatch({
//                     type: productsTypes.ADD_PRODUCT,
//                     payload: newProduct
//                 });
//             } else {
//                 throw new Error('Failed to add product');
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };
// }

export function addProductAsync(product) {
    return async function(dispatch) {
        try {
            console.log('Adding product:', product);
            dispatch(addProduct(product));
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };
}