import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <div className="main" >
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
