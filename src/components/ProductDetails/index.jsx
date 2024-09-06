import image from '../ProductCard/product-image.webp';
import styles from './ProductDetails.module.scss';

export default function ProductDetails({title, body}) {
    return (
        <div className={styles.productDetails}>
            <div className={styles.productDetails__image}>
                <img className={styles.productDetails__img} src={image} alt="images" />
            </div>
            <div className={styles.productDetails__content}>
                <h1 className={styles.productDetails__title}>{title}</h1>
                <p className={styles.productDetails__text}>Price: $65</p>
                <p className={styles.productDetails__text}>{body}</p>
            </div>
        </div>
    )
}