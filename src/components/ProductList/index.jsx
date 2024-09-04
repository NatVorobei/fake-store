import { Link } from "react-router-dom";

export default function ProductList({products}) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {products.map(product => (
                    <div key={product.id} style={{ border: '1px solid #ddd', padding: '20px', width: '200px' }}>
                        <Link to={`/products/${product.id}`}>
                            <img src={product.image} alt={product.title} style={{ width: '100%', height: 'auto' }} />
                            <h3>{product.title}</h3>
                            <p>${product.price}</p>
                        </Link>
                    </div>
                ))}
            </div>
    )
}