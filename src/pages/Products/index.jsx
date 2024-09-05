import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAsync } from "../../redux/actions/productsActions";
import ProductList from "../../components/ProductList";
import styles from './Products.module.scss';

export default function ProductsPage(){
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const [limit, setLimit] = useState(8);

    useEffect(() => {
        dispatch(getProductsAsync(limit));
      }, [dispatch, limit]);

    const handleLoadProducts = (newLimit) => {
        setLimit(newLimit);
    };
    return (
        <>
        <ProductList products={products} />
        <div className={styles.productBtns}>
            <button className={styles.productBtns__btn} onClick={() => handleLoadProducts(8)}>8</button>
            <button className={styles.productBtns__btn} onClick={() => handleLoadProducts(16)}>16</button>
            <button className={styles.productBtns__btn} onClick={() => handleLoadProducts(20)}>All Products</button>
        </div>
        </>
    )
}