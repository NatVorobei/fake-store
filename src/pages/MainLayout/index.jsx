import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from './MainLayout.module.scss';

export default function MainLayout({children}){
    return (
        <div className={styles.layout}>
            <Header />
            <Outlet />
            <main className={styles.layout__content}>
                {children}
            </main>
            <Footer />
        </div>
    )
}