import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

export default function Home(){
    return (
        <div className={styles.homePage}>
            <div className={styles.homePage__links}>
                <Link to={'/products'} className={styles.homePage__links_link}>Shop now 🡢</Link>
                <Link className={styles.homePage__links_link}>About Us 🡢</Link>
            </div>
        </div>
    )
}