import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Scheduler from "../../pages/Scheduler";

const Authenticated: React.FC = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/agendar" element={<Scheduler />} />
        </Routes>
    );
};

export default Authenticated;
