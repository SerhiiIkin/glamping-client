import Title from "./../Title/Title";
import styles from "./info.module.css";
import PropTypes from "prop-types";

const Info = ({ title, description,  }) => {
    return (
        <>
            <Title type={"h2"} className={styles.title}>
                {title}
            </Title>
            <p className={styles.description}>{description}</p>
        </>
    );
};

export default Info;

Info.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};
