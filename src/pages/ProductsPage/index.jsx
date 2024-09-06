import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAsync } from "../../redux/actions/productsActions";
import ProductList from "../../components/ProductList";
import styles from './Products.module.scss';

export default function ProductsPage(){
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [productLimit, setProductLimit] = useState(8);
    
    useEffect(() => {
        dispatch(getProductsAsync());
    }, [dispatch]);

    useEffect(() => {
        if (products.length) {
            setDisplayedProducts(products.slice(0, productLimit));
        }
    }, [products, productLimit]);

    const handleLimitChange = (limit) => {
        setProductLimit(limit);
    };

    
    return (
        <>
        <ProductList products={displayedProducts} />
        <div className={styles.productBtns}>
                <button className={styles.productBtns__btn} onClick={() => handleLimitChange(8)}>8 products</button>
                <button className={styles.productBtns__btn} onClick={() => handleLimitChange(16)}>16 products</button>
                <button className={styles.productBtns__btn} onClick={() => handleLimitChange(20)}>All products (or 20)</button>
            </div>
        </>
    )
}