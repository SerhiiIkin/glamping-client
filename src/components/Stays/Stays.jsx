import styles from "./stays.module.css";
import useFetch from "./../../hooks/useFetch.hook";
import Title from "./../Title/Title";
import { PropTypes } from "prop-types";
import Link from "../../components/Link/Link"

const Stays = () => {
    const { data } = useFetch({ path: "stays" });

    const Stay = ({ stay }) => (
        <article className={styles.stay} key={stay._id}>
            <div className={"container"}>
                <div className={styles.content}>
                    <Title type="h2">{stay.title}</Title>
                    <Title type="h4">
                        <span> {stay.numberOfPersons} personer </span>
                    </Title>
                    <Title type="h4">
                        <span>Fra {stay.price},- </span>
                    </Title>
                </div>
            </div>
            <div
                className={styles.imageContainer}
                style={{
                    background: `linear-gradient(0deg, rgba(54, 54, 54, 0.56) 0%, rgba(54, 54, 54, 0.56) 100%), url(${stay.image}) lightgray 50% / cover no-repeat`,
                }}
            ></div>
            <Link to={`/stays/${stay._id}`} className={styles.link} >
                Læs <span className={styles.more}>mere</span>
            </Link>
        </article>
    );

    Stay.propTypes = {
        stay: PropTypes.object.isRequired,
    };

    return (
        <section className={styles.stays}>
            {data.length > 0 &&
                data.map((stay) => <Stay key={stay._id} stay={stay} />)}
        </section>
    );
};
export default Stays;
