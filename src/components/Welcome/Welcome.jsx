import Background from "../../components/Background/Background";

import styles from "./welcome.module.css";
import PropTypes from "prop-types";
import Title from "../Title/Title";
import Link from "../../components/Link/Link";

const Welcome = ({ isHome, subtitle, title, bgImage, children }) => {
    return (
        <section className={styles.welcome}>
            <Background
                containerStyle={styles.containerBackground}
                bgImage={bgImage}
            />
            <article>
                {isHome && subtitle.length > 0 && (
                    <Title type={"h2"}>{subtitle}</Title>
                )}
                <Title type={"h1"} className={styles.title}>
                    {title}
                </Title>
                {children}

                {isHome && (
                    <Link to="/kontakt" className={styles.link}>
                        
                        Book nu
                    </Link>
                )}
            </article>
        </section>
    );
};

Welcome.propTypes = {
    isHome: PropTypes.bool,
    subtitle: PropTypes.string,
    title: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default Welcome;
