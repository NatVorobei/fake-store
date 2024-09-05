import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';
// import { baseUrl } from '../../utils/vars';

export default function ProductCard({id, imageUrl, title, price}){
    return(
        <div className={styles.productCard}>
            <Link to={`/products/${id}`} className={styles.productCard__link}>
                {/* <img className={styles.productCard__img} src={imageUrl[0]} alt={title} width={'100px'} /> */}
                <h3 className={styles.productCard__title}>{title}</h3>
            </Link>
            <p className={styles.productCard__price}>${price}</p>
        </div>
    )
}