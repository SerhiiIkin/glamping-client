import Logo from "../Logo/Logo";
import Title from "../Title/Title";
import styles from "./footer.module.css";
import { Link } from "react-router";
const Footer = () => {
    const FacebookIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="74"
            viewBox="0 0 72 74"
            fill="none"
        >
            <path
                d="M64 0.122803H8C3.58 0.122803 0 3.75252 0 8.23391V65.0117C0 69.4931 3.58 73.1228 8 73.1228H38.484V44.8921H29.112V33.8407H38.484V25.7093C38.484 16.2842 44.168 11.1458 52.464 11.1458C55.26 11.1377 58.052 11.2837 60.832 11.5716V21.4266H55.12C50.6 21.4266 49.72 23.5923 49.72 26.7881V33.8245H60.52L59.116 44.8759H49.656V73.1228H64C68.42 73.1228 72 69.4931 72 65.0117V8.23391C72 3.75252 68.42 0.122803 64 0.122803Z"
                fill="white"
            />
        </svg>
    );

    const InstagramIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="82"
            height="81"
            viewBox="0 0 82 82"
            fill="none"
        >
            <path
                d="M1.5 22.6228C1.5 11.044 11.0109 1.6228 22.7778 1.6228H59.2222C70.9891 1.6228 80.5 11.044 80.5 22.6228V58.6228C80.5 70.2016 70.9891 79.6228 59.2222 79.6228H22.7778C11.0109 79.6228 1.5 70.2016 1.5 58.6228V22.6228ZM74.3889 13.6228C74.3889 10.2931 71.659 7.6228 68.3333 7.6228C65.0076 7.6228 62.2778 10.2931 62.2778 13.6228C62.2778 16.9525 65.0076 19.6228 68.3333 19.6228C71.659 19.6228 74.3889 16.9525 74.3889 13.6228ZM65.2778 40.6228C65.2778 27.3526 54.3889 16.6228 41 16.6228C27.6111 16.6228 16.7222 27.3526 16.7222 40.6228C16.7222 53.893 27.6111 64.6228 41 64.6228C54.3889 64.6228 65.2778 53.893 65.2778 40.6228ZM32.3903 32.144C34.6707 29.8915 37.7673 28.6228 41 28.6228C44.2327 28.6228 47.3293 29.8915 49.6097 32.144C51.8894 34.3959 53.1667 37.4462 53.1667 40.6228C53.1667 43.7994 51.8894 46.8497 49.6097 49.1016C47.3293 51.3541 44.2327 52.6228 41 52.6228C37.7673 52.6228 34.6707 51.3541 32.3903 49.1016C30.1106 46.8497 28.8333 43.7994 28.8333 40.6228C28.8333 37.4462 30.1106 34.3959 32.3903 32.144Z"
                fill="white"
                stroke="#2A4F57"
                strokeWidth="3"
            />
        </svg>
    );

    return (
        <footer className={styles.footer}>
            <article className={styles.icons}>
                <Link
                    target="_blank"
                    to="https://www.facebook.com/GittesGlamping/"
                >
                    <FacebookIcon />
                </Link>
                <Link
                    target="_blank"
                    to="https://www.instagram.com/gittesglamping/"
                >
                    <InstagramIcon />
                </Link>
            </article>
            <article className={styles.content}>
                <Logo classNameContainer={styles.logoContainer} />
                <Title type={"h3"} className={styles.text}>
                    Gittes Glamping
                </Title>
            </article>
            <Link className={styles.link} to="/login">
                
                Er du admin? Click here
            </Link>
        </footer>
    );
};
export default Footer;
