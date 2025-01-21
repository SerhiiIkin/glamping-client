import styles from "./table.module.css";
import Title from "../Title/Title";
import Button from "../Button/Button";
import { useContext } from "react";
import { StaysContext } from "../../context/stays.context";

const Table = () => {
    const {  setCurrentStay, data, setData, singlePath } =
        useContext(StaysContext);

    const deleteHandler = async (id) => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_SERVER_URL}/${singlePath}/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (response.ok) {
                setData(data.filter((item) => item._id !== id));
            }
        } catch (error) {
            console.error(error);
        }
    };

    const editHandler = (item) => {
        setCurrentStay(item);
    };

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Activity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0 &&
                    data.map((item) => (
                        <tr key={item._id}>
                            <td>
                                <Title type={"h2"} className={styles.title}>
                                    {item.title}
                                </Title>
                            </td>
                            <td className={styles.actions}>
                                <Button
                                    data-type="edit"
                                    onClick={() => editHandler(item)}
                                    className={styles.button}>
                                    Update
                                </Button>
                                <Button
                                    onClick={() => deleteHandler(item._id)}
                                    data-type="delete"
                                    className={styles.button}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};

export default Table;
