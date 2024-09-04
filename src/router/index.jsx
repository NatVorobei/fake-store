import { Route, Routes } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";

export default function Router(){
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}