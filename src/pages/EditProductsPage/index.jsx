import { useSelector } from "react-redux";
import ProductList from "../../components/ProductList";
import { useState } from "react";
import styles from './EditProductsPage.module.scss';

import EditProductForm from "../../components/EditProductForm";

export default function EditProductPage({isInEditPage=true}) {
    const products = useSelector((state) => state.products.products);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const handleFormSubmit = () => {
        setIsFormVisible(false);
        setEditingProduct(null);
    };

    const handleEditClick = (product) => {
        setEditingProduct(product);
        setIsFormVisible(true);
    };
   
    return (
        <div className={styles.editProduct}>
            <h1 className={styles.editProduct__title}>Edit Products</h1>
            {isFormVisible && editingProduct ? (
                <EditProductForm product={editingProduct} onFormSubmit={handleFormSubmit} />
            ) : (
                <ProductList products={products} isInEditPage={isInEditPage} onEditClick={handleEditClick} />
            )}
        </div>
    )
}