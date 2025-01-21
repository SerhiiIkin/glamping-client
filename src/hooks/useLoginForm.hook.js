import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";
import { useNavigate } from "react-router";
import { object, string } from "yup";

const useLoginForm = () => {
    const [error, setError] = useState("");
    const [, saveToken] = useLocalStorage("token", "");
    const navigate = useNavigate();

    const formSchema = object({
        email: string().required(),
        password: string().required(),
    });

    const auth = async (formObject) => {
        try {
            const formValidetedData = await formSchema.validate(formObject);
            const response = await fetch(
                `${import.meta.env.VITE_SERVER_URL}/auth/signin`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formValidetedData),
                }
            );

            const { data, status } = await response.json();

            if (status === "ok") {
                saveToken(data.token);
                navigate("/backoffice");
            }
        } catch (error) {
            setError(error.message);
            console.error(error.message);
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObject = Object.fromEntries(formData.entries());
        auth(formObject);
    };

    const onResetBtnCLick = () => {
        setError("");
    };

    return {
        submitHandler,
        error,
        onResetBtnCLick,
    };
};

export default useLoginForm;
