import ProductCard from "../ProductCard";
import styles from './ProductList.module.scss';

export default function ProductList({products, isInEditPage=false}) {
    return (
        <div className={isInEditPage ? styles.productEdit : styles.productList}>
            <div className={isInEditPage ? styles.productEdit__container : styles.productList__container}>
                {products.map(product => (
                    <div key={product.id}>
                        <ProductCard {...product} isInEditPage={isInEditPage}/>
                    </div>
                ))}
            </div>  
        </div>
    )
}