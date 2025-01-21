import LoginForm from "../../components/LoginForm/LoginForm";
import Welcome from "./../../components/Welcome/Welcome";
const LoginPage = () => {
    return (
        <main>
            <Welcome bgImage="/image_05.jpg" title="Login page">
                <LoginForm />
            </Welcome>
        </main>
    );
};
export default LoginPage;
