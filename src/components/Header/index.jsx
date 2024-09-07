import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import ShoppingBag from '../Icons/ShoppingBag';

export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.header__container}>
                <Link to={'/'} className={styles.header__logo}>
                    <ShoppingBag className={styles.header__svg} width={'50px'} height={'50px'} />
                    <h1 className={styles.header__logo_text}>FStore</h1>
                </Link>
                <div className={styles.header__nav}>
                    <div className={styles.header__links}>
                        <Link to={'/'} className={styles.header__link}>Home</Link>
                        <Link to={'/products'} className={styles.header__link}>Products</Link>
                        <Link to={'/add-product'} className={styles.header__link}>Add Product+</Link>
                        <Link to={'/edit'} className={styles.header__link}>Edit Products</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}