import { PropTypes } from "prop-types";
import styles from "./backofficelayout.module.css";
import Title from "../../components/Title/Title";
import BackofficeNavBar from "../../components/BackofficeNavBar/BackofficeNavBar";
import { Link } from "react-router";

const BackofficeLayout = ({ children }) => {
    return (
        <section>
            <div className="container">
                <Link to="/backoffice">
                    <Title className={styles.title} type="h1">
                        Backoffice
                    </Title>
                </Link>
                <Link to="/" className={styles.link}>
                    Back to frontend
                </Link>
                <BackofficeNavBar />
                {children}
            </div>
        </section>
    );
};

BackofficeLayout.propTypes = {
    children: PropTypes.node,
};

export default BackofficeLayout;
