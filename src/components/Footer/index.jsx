import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__links}>
                    <Link className={styles.footer__links_link}>About us</Link>
                    <Link className={styles.footer__links_link}>Contacts</Link>
                    <Link className={styles.footer__links_link}>Terms and Conditions</Link>
                    <Link className={styles.footer__links_link}>Privacy policy</Link>
                    <Link className={styles.footer__links_link}>Delivery</Link>
                    <Link className={styles.footer__links_link}>Cookie policy</Link>
                </div>
                <div className={styles.footer__info}>
                    <p className={styles.footer__rights}>2024 © FStore. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}