import styles from "./Breadcrumbs.module.css";
import { Link } from "react-router";

import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();

    return (
        <div className={styles.breadcrumbs}>
            {breadcrumbs.map(({ breadcrumb }, i) => {
                return (
                    <div key={breadcrumb.key}>
                        <span>{i > 0 && ">"}</span>
                        <Link className={styles.link} to={breadcrumb.key}>
                            {breadcrumb}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Breadcrumbs;
