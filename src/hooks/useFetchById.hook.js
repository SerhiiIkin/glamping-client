import { useState, useEffect } from "react";
const useFetchById = ({ path, id }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch(
            `${import.meta.env.VITE_SERVER_URL}/${path}/${id}`
        );

        const { data, status } = await response.json();

        if (status === "ok") {
            setData(data[0]);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data };
};
export default useFetchById;
