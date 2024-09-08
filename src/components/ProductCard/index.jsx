import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';
import { useDispatch } from 'react-redux';
import { deleteProductAsync } from '../../redux/actions/productsActions';
import defaultImage from './default-image.png';

export default function ProductCard({id, title, description, category, price, images, isInEditPage=false, onEditClick}){
    const dispatch = useDispatch();

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            dispatch(deleteProductAsync(id));
        }
    };

    const imgSrc = Array.isArray(images) && images.length > 0 ? images[0] : defaultImage;

    return(
        <div className={!isInEditPage ? styles.productCard : styles.productCardEdit}>
            <Link to={`/products/${id}`} className={!isInEditPage ? styles.productCard__link : styles.productCardEdit__link}>
                <img className={!isInEditPage ? styles.productCard__img : styles.productCardEdit__img} src={imgSrc} alt={title} />
                <h3 className={styles.productCard__title}>{title.split(" ").slice(0, 3).join(" ")}</h3>
            </Link>
            <div className={styles.productCard__descr}>
            {!isInEditPage ? 
                <p className={styles.productCard__descr_text}>
                    {description.split(" ").slice(0, 10).join(" ")} 
                    <span>
                        <Link className={styles.productCard__readMore} to={`/products/${id}`}>...continue reading</Link>
                    </span>
                </p> : ''}
            </div>
            <div className={styles.productCard__info}>
                <p className={styles.productCard__price}><span className={!isInEditPage ? styles.productCard__amount : styles.productCardEdit__amount}> ${price}</span></p>
                {isInEditPage ? (
                    <div className={styles.productCard__actions}>
                        <button onClick={() => onEditClick({ id, title, description, price, category, images })} className={styles.productCard__btn}>Edit ✎</button>
                        <button onClick={handleDelete} className={styles.productCard__btn}>Delete 🗑</button>
                    </div>
                ) : (
                    <button className={styles.productCard__btn}>Add to cart +</button>
                )}
            </div>
        </div>
    )
}