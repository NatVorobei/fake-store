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
        payload: { ...product, isCreated: true}
    }
}

export function updateProduct(product) {
    return {
        type: productsTypes.UPDATE_PRODUCT,
        payload: product
    };
}

export function deleteProduct(product) {
    return {
        type: productsTypes.DELETE_PRODUCT,
        payload: product
    };
}

export function getProductsAsync(){
    return async function(dispatch) {
        try {
            const result = await fetch('https://dummyjson.com/products');
            const data = await result.json();
            dispatch(getProducts(data));
        } catch (error) {
            console.error('Failed to fetch', error);
        }
    }
}

export function addProductAsync(product) {
    return async function(dispatch, getState) {
        try {
            const response = await fetch('https://dummyjson.com/products/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const newProduct = await response.json();

            const productWithClientData = {
                ...newProduct,
                id: product.id,
                published: product.published || false, 
                createdAt: product.createdAt || new Date().toISOString() 
            };

            dispatch(addProduct(productWithClientData));

            const { products } = getState().products;
            const updatedProducts = [...products, productWithClientData];
            localStorage.setItem('createdProducts', JSON.stringify(updatedProducts));

        } catch (error) {
            console.error('Error adding product:', error);
        }
    };
}

export function updateProductAsync(product) {
    return async function (dispatch) {
        try {
            const response = await fetch(`https://dummyjson.com/products/${product.id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    title: product.title,
                    price: product.price,
                    description: product.description
                }),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const updatedProduct = await response.json();
            dispatch(updateProduct(updatedProduct));

        } catch (error) {
            console.error('Error updating product:', error);
        }
    };
}

export function deleteProductAsync(product){
    return async function (dispatch) {
        try {
        fetch('https://dummyjson.com/products/1', {
            method: 'DELETE',
        });
        dispatch(deleteProduct(product))
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    }
}

