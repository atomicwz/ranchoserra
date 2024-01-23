import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Scheduler from "../../pages/Scheduler";
import SchedulerList from "../../pages/SchedulerList";

const Authenticated: React.FC = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/agendar" element={<Scheduler />} />
            <Route path="/agendamentos" element={<SchedulerList />} />
        </Routes>
    );
};

export default Authenticated;
