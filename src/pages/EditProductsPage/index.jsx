import { useSelector } from "react-redux";
import ProductList from "../../components/ProductList";
import { useState } from "react";
import styles from './EditProductsPage.module.scss';
import CreateProductForm from "../../components/CreateProductForm";

export default function EditProductPage({isInEditPage=true}) {
    const products = useSelector((state) => state.products.products);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setIsFormVisible(prev => !prev); 
    };

    const handleFormSubmit = () => {
        setIsFormVisible(false); 
    };
   
    return (
        <div className={styles.editProduct}>
            <button className={styles.editProduct__btn} onClick={toggleFormVisibility}>{isFormVisible ? 'Close Form' : 'Add product+'}</button>
            {isFormVisible && <CreateProductForm onFormSubmit={handleFormSubmit}/>}
            <ProductList products={products} isInEditPage={isInEditPage}/>
        </div>
    )
}