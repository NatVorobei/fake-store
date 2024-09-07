import styles from './ProductDetails.module.scss';

export default function ProductDetails({title, description, price, images, tags, sku, category}) {
    const imgSrc = Array.isArray(images) && images.length > 0 ? images[0] : 'default-image-url';

    return (
        <>
        <div className={styles.productDetails}>
            <img className={styles.productDetails__img} src={imgSrc} alt={title} />
            <div className={styles.productDetails__content}>
                <h1 className={styles.productDetails__title}>{title}</h1>
                <p className={styles.productDetails__text}>{sku}</p>
                <p className={styles.productDetails__text}>{description}</p>
                <p className={styles.productDetails__text}>Price: <span style={{fontWeight: 700}}>${price}</span></p>
                <button className={styles.productDetails__btn}>Add to cart+</button>
            </div>

        </div>
        <div className={styles.productDetails__tags}>
            {tags && tags.map((item) => (
                <div className={styles.productDetails__tags_tag} key={item}>#{item}</div>
            ))}
        </div>
        </>
    )
}