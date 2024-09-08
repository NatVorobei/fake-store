import { Route, Routes } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import EditProductPage from "../pages/EditProductsPage";
import AddProductPage from "../pages/AddproductPage";
import SingleProduct from "../pages/SingleProduct";

export default function Router(){
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<SingleProduct />} />
                <Route path="/add-product" element={<AddProductPage />} />
                <Route path="/edit" element={<EditProductPage />} />
            </Route>
        </Routes>
    )
}