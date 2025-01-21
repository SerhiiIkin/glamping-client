import { Routes, Route } from "react-router";
import MainLayout from "./../layouts/MainLayout/MainLayout";
import Home from "./../pages/Home/Home";
import StaysPage from "./../pages/StaysPage/StaysPage";
import StayPage from "./../pages/StayPage/StayPage";
import KontaktPage from "./../pages/KontaktPage/KontaktPage";
import ActivitiesPage from "./../pages/ActivitiesPage/ActivitiesPage";
import LoginPage from "./../pages/LoginPage/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import BackofficePage from "./../pages/BackofficePage/BackofficePage";
import MyListPage from "../pages/MyListPage/MyListPage";
import StaysHandlerPage from "./../pages/StaysHandlerPage/StaysHandlerPage";
import NotFound from "../pages/NotFound/NotFound";
const MainRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />

                <Route path="stays">
                    <Route index element={<StaysPage />} />
                    <Route path=":id" element={<StayPage />} />
                </Route>
                <Route path="kontakt" element={<KontaktPage />} />
                <Route path="aktiviteter" element={<ActivitiesPage />} />
                <Route path="my-list" element={<MyListPage />} />
                <Route
                    path="login"
                    element={
                        <>
                            <ProtectedRoute />
                            <LoginPage />
                        </>
                    }
                />
                <Route path="backoffice" element={<ProtectedRoute />}>
                    <Route index element={<BackofficePage />} />

                    <Route path="stays" element={<StaysHandlerPage />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};
export default MainRoutes;
