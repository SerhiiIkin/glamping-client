import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = ({ children ,className, type="button", ...props }) => {
    const mergedStyles = `${styles.button} ${className}`;

    return <button type={type} className={mergedStyles} {...props}> {children} </button>;
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    type: PropTypes.string
};

export default Button;
