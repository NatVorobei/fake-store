import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';
import { useDispatch } from 'react-redux';
import { deleteProductAsync, updateProductAsync } from '../../redux/actions/productsActions';
import { useState } from 'react';

export default function ProductCard({id, title, description, category, price, images, isInEditPage=false}){
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(title);

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            dispatch(deleteProductAsync(id));
        }
    };

    const handleEdit = () => {
        dispatch(updateProductAsync({ id, title: editTitle }));
        setIsEditing(false);
    };

    const imgSrc = Array.isArray(images) && images.length > 0 ? images[0] : 'default-image-url';

    return(
        <div className={!isInEditPage ? styles.productCard : styles.productCardEdit}>
            <Link to={`/products/${id}`} className={styles.productCard__link}>
                <img className={styles.productCard__img} src={imgSrc} alt={title} />
                <h3 className={styles.productCard__title}>{title.split(" ").slice(0, 3).join(" ")}</h3>
            </Link>
            <div className={styles.productCard__descr}>
                <p>
                    {description.split(" ").slice(0, 10).join(" ")} 
                    <span>
                        <Link className={styles.productCard__readMore} to={`/products/${id}`}>...continue reading</Link>
                    </span>
                </p>
            </div>
            <div className={styles.productCard__info}>
                <p className={styles.productCard__price}><span className={styles.productCard__amount}> ${price}</span></p>
                {isInEditPage ? 
                    (<div className={styles.productCard__actions}>
                        <button onClick={() => setIsEditing(true)} className={styles.productCard__actions_edit}>Edit ✎</button>
                        <button onClick={handleDelete} className={styles.productCard__actions_del}>Delete 🗑</button>
                    </div>
                    ) : (
                    <button className={styles.productCard__btn}>Add to cart+</button>
                )}
            </div>
            {isEditing && (
                <div className={styles.editModal}>
                    <div className={styles.editModal__title}>
                        <p>Edit Product</p>
                        <input
                            type="text"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                    </div>  
                    <div className={styles.editModal__btns}>
                        <button className={styles.editModal__btn} onClick={handleEdit}>Save</button>
                        <button className={styles.editModal__btn} onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    )
}