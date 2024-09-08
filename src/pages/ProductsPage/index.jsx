import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAsync } from "../../redux/actions/productsActions";
import ProductList from "../../components/ProductList";
import styles from './Products.module.scss';
import CreatedProducts from "../../components/CreatedProducts";


export default function ProductsPage(){
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [productLimit, setProductLimit] = useState(8);
    const [view, setView] = useState('all');
    
    useEffect(() => {
        if(!products.length){
            dispatch(getProductsAsync());
        }
    }, [dispatch, products]);

    useEffect(() => {
        if (products.length) {
            setDisplayedProducts(products.slice(0, productLimit));
        }
    }, [products, productLimit]);

    useEffect(() => {
        if (products.length) {
            if (productLimit === 'all') {
                setDisplayedProducts(products);
            } else {
                setDisplayedProducts(products.slice(0, productLimit));
            }
        }
    }, [products, productLimit]);

    const handleLimitChange = (limit) => {
        setProductLimit(limit);
    };

    const handleViewChange = (viewType) => {
        setView(viewType);
    };

    return (
        <div className={styles.productsPage}>
        <div className={styles.productsPage__tabs}>
            <button className={`${styles.productsPage__tab} ${view === 'all' ? styles.active : ''}`}onClick={() => handleViewChange('all')}>Products</button>
            <button className={`${styles.productsPage__tab} ${view === 'created' ? styles.active : ''}`} onClick={() => handleViewChange('created')}>Created Products</button>
        </div>
        {view ==='all' ? (
            <>
            <ProductList products={displayedProducts} />
                <div className={styles.productBtns}>
                    <button className={styles.productBtns__btn} onClick={() => handleLimitChange(8)}>8</button>
                    <button className={styles.productBtns__btn} onClick={() => handleLimitChange(16)}>16</button>
                    <button className={styles.productBtns__btn} onClick={() => handleLimitChange('all')}>All products</button>
                </div></>
            ) : (
            <CreatedProducts />
        )}
        </div>
    )
}