import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../../pages/Home";
import { useAuth } from "../../auth";
import { Scheduler } from "../../pages/Scheduler";
import { observer } from "mobx-react";

const Authenticated: React.FC = observer(() => {
    const { user } = useAuth();
    const router = useNavigate();

    React.useEffect(() => {
        if (!user) {
            router("/login");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/agendar" element={<Scheduler.CreateOrEdit />} />
            <Route path="/agendamentos" element={<Scheduler.TableView />} />
        </Routes>
    );
});

export default Authenticated;
