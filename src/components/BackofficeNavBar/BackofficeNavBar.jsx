import { Link, useNavigate } from "react-router";
import styles from "./backofficenavbar.module.css";
import Button from "./../Button/Button";
const BackofficeNavBar = () => {
    const navigate = useNavigate();
    const navLinks = [
        {
            _id: 1,
            title: "Stays",
            to: "/backoffice/stays",
        },
    ];

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <nav className={styles.nav}>
            {navLinks.map((link) => (
                <Link key={link.title} to={link.to} className={styles.link}>
                    {link.title}
                </Link>
            ))}
            <Button type="button" onClick={logout} className={styles.button}>
                Log ud
            </Button>
        </nav>
    );
};
export default BackofficeNavBar;
