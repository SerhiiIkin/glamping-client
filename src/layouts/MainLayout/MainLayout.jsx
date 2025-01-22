import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    return (
        <div className="main">
            <NavBar />
            <Outlet />
            <Footer />
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                pauseOnFocusLoss
                pauseOnHover
            />
        </div>
    );
};

export default MainLayout;
