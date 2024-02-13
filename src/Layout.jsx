import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

export default function Layout() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}