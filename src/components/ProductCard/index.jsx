import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';
import img from './product-image.webp';
import { useDispatch } from 'react-redux';
import { deleteProductAsync } from '../../redux/actions/productsActions';

export default function ProductCard({id, title}){
    const dispatch = useDispatch();
    return(
        <div className={styles.productCard}>
            <div className={styles.productCard__actions}>
                <button className={styles.productCard__actions_edit}>✎</button>
                <button onClick={dispatch(deleteProductAsync())} className={styles.productCard__actions_del}>🗑</button>
            </div>
            <Link to={`/products/${id}`} className={styles.productCard__link}>
                <img className={styles.productCard__img} src={img} alt={title} />
                <h3 className={styles.productCard__title}>{title.split(" ").slice(0, 3).join(" ") + "..."}</h3>
            </Link>
            <p className={styles.productCard__price}>Price: $60</p>
        </div>
    )
}