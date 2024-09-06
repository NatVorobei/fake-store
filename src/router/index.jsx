import { Route, Routes } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import CreateProductForm from "../components/CreateProductForm";
import ProductsPage from "../pages/ProductsPage";
import EditProductPage from "../pages/EditProductsPage";

export default function Router(){
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/add-product" element={<CreateProductForm />} />
                <Route path="/edit" element={<EditProductPage />} />
            </Route>
        </Routes>
    )
}