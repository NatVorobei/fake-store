import { useSelector } from "react-redux";
import ProductList from "../../components/ProductList";

export default function EditProductPage() {
    const products = useSelector((state) => state.products.products);
    return (
        <>
        <ProductList products={products} isInEditPage={true} />
        </>
    )
}