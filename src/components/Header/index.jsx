import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.header__container}>
                <Link to={'/'} className={styles.header__logo}>
                   <img className={styles.header__logo_img} src="/images/logo.png" alt="logo"/>
                </Link>
                <div className={styles.header__nav}>
                    <div className={styles.header__links}>
                        <Link to={'/products'} className={styles.header__link}>Products</Link>
                        <Link to={'/add-product'} className={styles.header__link}>Add Product+</Link>
                        <Link className={styles.header__link}>Edit Products</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}