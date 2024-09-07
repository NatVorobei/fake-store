import { useSelector } from "react-redux";
import ProductList from "../../components/ProductList";
import { useState } from "react";
import styles from './EditProductsPage.module.scss';
import CreateProductForm from "../../components/CreateProductForm";
import EditProductForm from "../../components/EditProductForm";

export default function EditProductPage({isInEditPage=true}) {
    const products = useSelector((state) => state.products.products);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    const toggleFormVisibility = () => {
        setIsFormVisible((prev) => !prev);
        setEditingProduct(null);
    };

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
            <button className={styles.editProduct__btn} onClick={toggleFormVisibility}>{isFormVisible ? 'Close Form' : 'Add product+'}</button>
            {isFormVisible && editingProduct ? (
                <EditProductForm product={editingProduct} onFormSubmit={handleFormSubmit} />
            ) : (
                isFormVisible && <CreateProductForm onFormSubmit={handleFormSubmit} />
            )}
            <ProductList products={products} isInEditPage={isInEditPage} onEditClick={handleEditClick} />
        </div>
    )
}