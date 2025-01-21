import styles from "./background.module.css";
import PropTypes from "prop-types";

const Background = ({ containerStyle, bgImage }) => {
    const mergedStyles = `${styles.container} ${containerStyle}`;

    return (
        <div
            style={{
                background: `linear-gradient(0deg, rgba(54, 54, 54, 0.56) 0%, rgba(54, 54, 54, 0.56) 100%), url(${bgImage}) lightgray 50% / cover no-repeat`,
            }}
            aria-label="backgound-image"
            className={mergedStyles}
        ></div>
    );
};

Background.propTypes = {
    containerStyle: PropTypes.string,
    bgImage: PropTypes.string.isRequired,
};

export default Background;
