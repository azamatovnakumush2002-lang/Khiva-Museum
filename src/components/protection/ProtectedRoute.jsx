import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const token = localStorage.getItem("token");

    // Agar token bo'lmasa, /login ga jo'natamiz
    if (!token) {
        return <Navigate to='/login' replace />;
    }

    // Token bo'lsa, ichki sahifalarga o'tkazamiz
    return <Outlet />;
};

export default ProtectedRoute;
