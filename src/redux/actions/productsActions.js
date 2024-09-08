import { productsTypes } from "../types/productsTypes";

export function getProducts(products){
    return {
        type: productsTypes.GET_PRODUCTS,
        payload: products
    }
}

export function getSingleProduct(product) {
    return {
        type: productsTypes.GET_SINGLE_PRODUCT,
        payload: product
    };
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

export function getSingleProductAsync(productId) {
    return async function (dispatch, getState) {
        try {
            const { createdProducts } = getState().products;

            const productFromLocalStorage = createdProducts.find(p => p.id === productId);

            if (productFromLocalStorage) {
                dispatch(getSingleProduct(productFromLocalStorage));
            } else {
                const result = await fetch(`https://dummyjson.com/products/${productId}`);
                if (!result.ok) {
                    throw new Error('Failed to fetch product from API');
                }
                const data = await result.json();
                dispatch(getSingleProduct(data));
            }
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };
}

// export function getSingleProductAsync(product) {
//     return async function (dispatch) {
//         try {
//             const result = await fetch(`https://dummyjson.com/products/${product}`);
//             const data = await result.json();
//             dispatch(getSingleProduct(data));
//         } catch (error) {
//             console.error('Failed to fetch product', error);
//         }
//     };
// }

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
    return async function (dispatch, getState) {
        try {
            const state = getState();
            const createdProductExists = state.products.createdProducts.some(p => p.id === product.id);

            if (createdProductExists) {
                const updatedCreatedProducts = state.products.createdProducts.map(p =>
                    p.id === product.id ? product : p
                );

                localStorage.setItem('createdProducts', JSON.stringify(updatedCreatedProducts));

                dispatch(updateProduct(product)); 

            } else {
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
            }
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };
}

// export function updateProductAsync(product) {
//     return async function (dispatch) {
//         try {
//             const response = await fetch(`https://dummyjson.com/products/${product.id}`, {
//                 method: 'PUT',
//                 body: JSON.stringify({
//                     title: product.title,
//                     price: product.price,
//                     description: product.description
//                 }),
//                 headers: {
//                     'Content-Type': 'application/json; charset=UTF-8'
//                 }
//             });

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const updatedProduct = await response.json();
//             dispatch(updateProduct(updatedProduct));

//         } catch (error) {
//             console.error('Error updating product:', error);
//         }
//     };
// }

export function deleteProductAsync(productId){
    return async function (dispatch, getState) {
        try {
        fetch(`https://dummyjson.com/products/${productId}`, {
            method: 'DELETE',
        });
        // dispatch(deleteProduct(product))
        dispatch(deleteProduct({ id: productId }));

            const { products, createdProducts } = getState().products;
            const updatedProducts = products.filter(product => product.id !== productId);
            const updatedCreatedProducts = createdProducts.filter(product => product.id !== productId);

            localStorage.setItem('products', JSON.stringify(updatedProducts));
            localStorage.setItem('createdProducts', JSON.stringify(updatedCreatedProducts));

        } catch (error) {
            console.error('Error deleting product:', error);
        }
    }
}

