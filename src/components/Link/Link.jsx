import { Link as RouterLink } from "react-router";
import PropTypes from "prop-types";
import styles from './link.module.css';
const Link = ({ to, children, className }) => {

    const mergedStyles = `${styles.link} ${className}`;

    return <RouterLink className={mergedStyles} to={to}>{children}</RouterLink>;
};

Link.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string
};

export default Link;
