import CreateProductForm from '../../components/CreateProductForm';
import styles from './AddProductPage.module.scss';

export default function AddProductPage() {
    return (
        <div className={styles.addProduct}>
            <h1 className={styles.addProduct__title}>Add Product</h1>
            <CreateProductForm />
        </div>
    )
}