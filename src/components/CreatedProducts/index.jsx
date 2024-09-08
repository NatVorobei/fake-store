import { useEffect, useState } from "react";
import styles from './CreatedProducts.module.scss';

export default function CreatedProducts() {
    const [filter, setFilter] = useState('all');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const savedProducts = JSON.parse(localStorage.getItem('createdProducts')) || [];
        const filteredProducts = savedProducts.filter(product => product.isCreated);
        setProducts(filteredProducts);
    }, []);

    const publishedProducts = products.filter(product => {
        if (filter === 'published') return product.published;
        if (filter === 'unpublished') return !product.published;
        return true;
    });

    return (
        <div className={styles.productTable}>
            <h1 className={styles.productTable__title}>Created products</h1>
            <label>
                Filter:
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="published">Published</option>
                    <option value="unpublished">Unpublished</option>
                </select>
            </label>
            <table className={styles.productTable__table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Published</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {publishedProducts.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.published ? 'Yes' : 'No'}</td>
                            <td>{product.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}