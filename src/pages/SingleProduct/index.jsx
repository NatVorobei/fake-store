import { useParams } from "react-router-dom";
import styles from './Product.module.scss';
import { useEffect } from "react";
import ProductDetails from "../../components/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductAsync } from "../../redux/actions/productsActions";

export default function SingleProduct() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.singleProduct);

    useEffect(() => {
        dispatch(getSingleProductAsync(id));
    }, [id, dispatch]);
    
    return (
        <div className={styles.product}>
            {product ? <ProductDetails {...product}/> : <p>Loading...</p>}
        </div>
    )
}