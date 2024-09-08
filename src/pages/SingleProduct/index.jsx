import { useParams } from "react-router-dom";
import styles from './Product.module.scss';
import { useCallback, useEffect, useState } from "react";
import ProductDetails from "../../components/ProductDetails";

export default function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const productLoad = useCallback(async () => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(response => response.json())
            .then(data => {      
                setProduct(data);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, [id, setProduct])
    
    useEffect(() => {
        productLoad()
    }, [productLoad]);
    
    return (
        <div className={styles.product}>
            <ProductDetails {...product}/>
        </div>
    )
}