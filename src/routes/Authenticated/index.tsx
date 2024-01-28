import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../../pages/Home";
import Scheduler from "../../pages/Scheduler";
import SchedulerList from "../../pages/SchedulerList";
import { useAuth } from "../../auth";

const Authenticated: React.FC = () => {
    const { user } = useAuth();
    const router = useNavigate();

    React.useEffect(() => {
        if (user) return router("/inicio");
        router("/login");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/agendar" element={<Scheduler />} />
            <Route path="/agendamentos" element={<SchedulerList />} />
        </Routes>
    );
};

export default Authenticated;
