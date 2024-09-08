import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

export default function Home(){
    return (
        <div className={styles.wrapper}>
            <div className={styles.homePage}>
                <div className={styles.homePage__links}>
                    <Link to={'/products'} className={styles.homePage__links_link}>Shop now 🡢</Link>
                </div>
            </div>
            <div className={styles.homePage__content}>
                <h2 className={styles.homePage__content_title}>Why buy direct from FStore</h2>
                <div className={styles.homePage__content_info}>
                    <ul className={styles.homePage__content_benefits}>
                        <li>Free 2-day shipping and returns</li>
                        <li>90-day risk-free trial</li>
                        <li>World class customer service</li>
                    </ul>
                    <p className={styles.homePage__content_text}>A great product is more than what’s in the box. It’s a promise of premium performance, world-class support, and everything you expect from a trusted brand. It’s just one of many reasons why you’ll shop with confidence on FStore.com.</p>
                </div>
            </div>
        </div>
    )
}