import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";

const Authenticated: React.FC = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    );
};

export default Authenticated;
