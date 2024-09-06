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

export function deleteProduct(product) {
    return {
        type: productsTypes.DELETE_PRODUCT,
        payload: product
    };
}

export function getProductsAsync(){
    return async function(dispatch) {
        // const result = await fetch('./products.json');
        try {
        // const result = await fetch(`https://api.escuelajs.co/api/v1/products/`);
        const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await result.json();
        dispatch(getProducts(data));
        } catch (error) {
            console.error('Failed to fetch', error);
        }
    }
}

export function addProductAsync(product) {
    return async function(dispatch) {
        try {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                  title: 'foo',
                  body: 'bar',
                  userId: 1,
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                .then((response) => response.json())
                .then((json) => console.log(json));
            
            dispatch(addProduct(product));
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };
}

export function deleteProductAsync(product){
    return async function (dispatch) {
        try {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
        });
        dispatch(deleteProduct(product))
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    }
}

