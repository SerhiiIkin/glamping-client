import { useLocalStorage } from "@uidotdev/usehooks";
import Activiti from "./../../components/Activiti/Activiti";
import styles from "./mylist.module.css";

const MyList = () => {
    const [activitiStorage] = useLocalStorage("activiti", []);
    return (
        <div className={styles.container} aria-label="my-list" >
            {activitiStorage.map((activiti) => (
                <Activiti key={activiti._id} activiti={activiti} />
            ))}
        </div>
    );
};
export default MyList;
