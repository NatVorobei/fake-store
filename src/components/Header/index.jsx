import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import ShoppingBag from '../Icons/ShoppingBag';
import { useState } from 'react';

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    function toggleBurgerMenu() {
        setIsOpen(!isOpen);
    }

    function handleLinkClick() {
        if (isOpen) {
            setIsOpen(false);
        }
    }

    return(
        <header className={styles.header}>
            <div className={styles.header__container}>
                <Link to={'/'} className={styles.header__logo}>
                    <ShoppingBag className={styles.header__svg} width={'50px'} height={'50px'} />
                    <h1 className={styles.header__logo_text}>FStore</h1>
                </Link>
                <div className={`${styles.header__burger} ${isOpen ? styles.active : ''}`} onClick={toggleBurgerMenu}>
                        <span></span>
                </div>
                <div className={`${styles.header__nav} ${isOpen ? styles.active : ''}`}>
                    <div className={`${styles.header__links} ${isOpen ? styles.active : ''}`}>
                        <Link to={'/'} onClick={handleLinkClick} className={styles.header__link}>Home</Link>
                        <Link to={'/products'} onClick={handleLinkClick} className={styles.header__link}>Products</Link>
                        <Link to={'/add-product'} onClick={handleLinkClick} className={styles.header__link}>Add Product+</Link>
                        <Link to={'/edit'} onClick={handleLinkClick} className={styles.header__link}>Edit Products</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}