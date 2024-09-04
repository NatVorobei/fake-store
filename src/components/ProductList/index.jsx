import ProductCard from "../ProductCard";
import styles from './ProductList.module.scss';

export default function ProductList({products}) {
    return (
        <div className={styles.productList}>
            <div className={styles.productList__container}>
                {products.map(product => (
                    <div key={product.id} >
                        <ProductCard {...product}/>
                    </div>
                ))}
            </div>  
        </div>
    )
}