import useFetch from "./../../hooks/useFetch.hook";
import Activiti from "./../Activiti/Activiti";
import styles from "./activities.module.css"

const Activities = () => {
    const { data } = useFetch({ path: "activities" });

    return (
        <div className={styles.container}>
            {data.length > 0 &&
                data.map((activiti) => (
                    <Activiti key={activiti._id} activiti={activiti} />
                ))}
        </div>
    );
};
export default Activities;
