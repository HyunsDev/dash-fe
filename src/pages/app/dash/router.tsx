import { Route, Routes } from "react-router-dom";
import { DashDashboardChannel } from "./dashboard";

export function AppDashRouter() {
    return (
        <Routes>
            <Route path="/" element={<DashDashboardChannel />} />
        </Routes>
    );
}
