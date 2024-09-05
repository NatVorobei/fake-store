import { Route, Routes } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Product from "../pages/Product";
import CreateProductForm from "../components/CreateProductForm";

export default function Router(){
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/add-product" element={<CreateProductForm />} />
            </Route>
        </Routes>
    )
}