import { PropTypes } from "prop-types";
import { useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Outlet, useNavigate, useLocation } from "react-router";
const ProtectedRoute = () => {
    const [token] = useLocalStorage("token", "");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const checkToken = async (token) => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_SERVER_URL}/auth/token`,
                    {
                        method: "POST",

                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ token }),
                    }
                );

                const { data } = await response.json();

                if (data.role === "admin" && location.pathname === "/login") {
                    navigate("/backoffice");
                } else if (
                    data.role !== "admin" &&
                    location.pathname.includes("/backoffice")
                ) {
                    navigate("/login");
                }
            } catch (error) {
                console.error(error);
            }
        };

        checkToken(token);
    }, [token, navigate, location.pathname]);

    return <Outlet />;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node,
    isAllowed: PropTypes.bool,
    redirect: PropTypes.string,
};

export default ProtectedRoute;
