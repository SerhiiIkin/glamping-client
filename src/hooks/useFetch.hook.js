import { useState, useEffect } from "react";
const useFetch = ({ path }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch(
            `${import.meta.env.VITE_SERVER_URL}/${path}`
        );

        const { data, status } = await response.json();

        if (status === "ok") {
            setData(data);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data };
};
export default useFetch;
