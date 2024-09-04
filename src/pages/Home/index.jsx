import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAsync } from "../../redux/actions/productsActions";
import ProductList from "../../components/ProductList";

export default function Home(){
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        dispatch(getProductsAsync());
      }, [dispatch]);

    return (
        <>
        <ProductList products={products} />
        </>
    )
}