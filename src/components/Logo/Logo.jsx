import { Link } from "react-router";
import styles from "./logo.module.css";
import logo from "/logo.png";

import PropTypes from "prop-types";

const Logo = ({ classNameContainer = "" }) => {
    const mergedStylesContainer = `${styles.logoContainer} ${classNameContainer}`;

    return (
        <Link to="/" className={mergedStylesContainer}>
            <img className={styles.logo} src={logo} alt="logo" />
        </Link>
    );
};

Logo.propTypes = {
    classNameContainer: PropTypes.string,
};

export default Logo;
