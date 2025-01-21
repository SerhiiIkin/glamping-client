import BackofficeFormHandler from "../../components/BackofficeFormHandler.jsx/BackofficeFormHandler";
import Table from "../../components/Table/Table";
import BackofficeLayout from "../../layouts/BackofficeLayout/BackofficeLayout";
import { useState, useEffect } from "react";
import { StaysContext } from "../../context/stays.context";
import useFetch from "../../hooks/useFetch.hook";

const StaysHandlerPage = () => {
    const formData = [
        {
            _id: 1,
            name: "Stay",
            fieldName: "title",
            fieldType: "input",
            placeholder: "Enter title",
            inputType: "text",
        },
        {
            _id: 4,
            name: "Description",
            fieldName: "description",
            fieldType: "textarea",
            placeholder: "Enter description",
            rows: 5,
        },
        {
            _id: 2,
            name: "Number of persons",
            fieldName: "numberOfPersons",
            fieldType: "input",
            placeholder: "Number of persons",
            inputType: "text",
        },
        {
            _id: 5,
            name: "Image",
            fieldName: "file",
            fieldType: "input",
            placeholder: "Upload image",
            inputType: "file",
        },
        {
            _id: 3,
            name: "Price",
            fieldName: "price",
            fieldType: "input",
            placeholder: "Enter price",
            inputType: "text",
        },
        {
            _id: 6,
            name: "Includes",
            fieldName: "includes",
            fieldType: "input",
            placeholder: "Enter includes with comas",
            inputType: "text",
        },
    ];
    const { data } = useFetch({ path: "stays" });
    const [currentStay, setCurrentStay] = useState({});
    const [stays, setStays] = useState([]);

    const value = {
        setCurrentStay,
        currentStay,
        data: stays,
        setData: setStays,
        path: "stays",
        formData,
        singlePath:"stay",
    }

    useEffect(() => {
        setStays(data);
    }, [data]);

    return (
        <BackofficeLayout>
            <StaysContext.Provider
                value={value}>
                <Table  />
                <BackofficeFormHandler  />
            </StaysContext.Provider>
        </BackofficeLayout>
    );
};
export default StaysHandlerPage;
