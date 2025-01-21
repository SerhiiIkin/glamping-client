import Title from "../../components/Title/Title";
import styles from "./notfound.module.css";
import { Link } from "react-router";
const NotFound = () => {
    return (
        <main>
            <Title className={styles.title} type={"h1"}>
                404 Not Found
            </Title>
            <Link to="/">Back to home</Link>
        </main>
    );
};

export default NotFound;
