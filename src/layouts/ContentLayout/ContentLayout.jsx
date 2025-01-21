import styles from "./contentlayout.module.css";
import { PropTypes } from "prop-types";
const ContentLayout = ({ children, className }) => {
    const mergedStyles = `${styles.contentLayout} ${
        className ? className : ""
    }`;

    return (
        <article className={mergedStyles}>
            <div className="container">{children}</div>
        </article>
    );
};

ContentLayout.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default ContentLayout;
