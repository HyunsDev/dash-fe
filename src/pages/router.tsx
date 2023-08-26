import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./auth/login.page";
import { AppRouter } from "./app/router";

export function RootRouter() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/app/*" element={<AppRouter />} />
        </Routes>
    );
}
