import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import apiUser from "../../api/apiUser.tsx";

export default function AdminRoute({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);


    const API_URL = "https://avto-school-backend.onrender.com/api"

    useEffect(() => {
        apiUser
            .get(`${API_URL}/auth/me`)
            .then((res) => {
                if (res.data.role === "admin") {
                    setIsAdmin(true);

                }

            })
            .catch(() => {
                localStorage.removeItem("token");
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) return null; // или loader

    if (!isAdmin) {
        return <Navigate to="/adminlogin" replace />;
    }

    return <>{children}</>;
}
