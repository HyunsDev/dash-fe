import { Route, Routes } from "react-router-dom";
import { AppDashRouter } from "./dash/router";

export function AppRouter() {
    return (
        <Routes>
            <Route path="/dash" element={<AppDashRouter />} />
        </Routes>
    );
}
