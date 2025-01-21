import styles from "./backgroundlayout.module.css";
import { PropTypes } from 'prop-types';

const BackgroundLayout = ({ children }) => {
    return <section className={styles.container}> {children} </section>;
};

BackgroundLayout.propTypes = {
    children: PropTypes.node,
};

export default BackgroundLayout;
