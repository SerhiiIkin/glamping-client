import styles from "./singlestay.module.css";
import Info from "../Info/Info";
import { PropTypes } from "prop-types";
import Link from "../Link/Link";
const SingleStay = ({ data }) => {
    const infoData = {
        title: `Tag væk en weekend, med én du holder af`,
        description: data.description,
    };
    return (
        <section className={styles.singlestay}>
            <div className="container">
                <Info {...infoData} />
                {data.includes.map((include) => (
                    <p className={styles.include} key={include}>
                        {include}
                    </p>
                ))}
                <p className={styles.price}>Price {data.price},- </p>
                <Link to={"/kontakt"}> Book nu</Link>
            </div>
        </section>
    );
};

SingleStay.propTypes = {
    data: PropTypes.object,
};

export default SingleStay;
