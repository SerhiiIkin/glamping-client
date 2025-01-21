import { useContext, useState, useEffect } from "react";
import styles from "./backofficeformhandler.module.css";
import { object, string, mixed, number } from "yup";
import { StaysContext } from "../../context/stays.context";

const BackofficeFormHandler = () => {
    const [error, setError] = useState("");
    const { path, formData, singlePath, currentStay, setCurrentStay, setData } =
        useContext(StaysContext);
    const [stay, setStay] = useState({});

    const imageEmpty = `${import.meta.env.VITE_SERVER_URL}/${path}/no-stay.jpg`;
    const [image, setImage] = useState(imageEmpty);

    const formSchema = object({
        title: string().required(),
        file: mixed().required(),
        description: string().required(),
        numberOfPersons: string().required(),
        price: number().required(),
        includes: string().required(),
    });

    const onResetCLickBtn = () => {
        setImage(imageEmpty);
        setError("");
        setStay({});
        setCurrentStay({});
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.target;

        setStay((prev) => ({ ...prev, [name]: value }));
    };

    const onImageChange = (e) => {
        let objectUrl = window.URL.createObjectURL(e.target.files[0]);
        setImage(objectUrl);
    };

    const handleStay = async ({ event, formValidetedFormData }) => {
        try {
            const url = `${import.meta.env.VITE_SERVER_URL}/${singlePath}`;

            const reponse = await fetch(url, {
                method: currentStay._id ? "PUT" : "POST",
                body: formValidetedFormData,
            });

            const { data } = await reponse.json();

            if (data) {
                setData((prev) =>
                    currentStay._id
                        ? prev.map((p) => (p._id === data._id ? data : p))
                        : [...prev, data]
                );
                setError("");
            }

            if (reponse.ok) {
                setStay({});
                event.target.reset();
                setImage(imageEmpty);
            }
        } catch (error) {
            console.log(error.message);
            setError(error.message);
        }
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const formObject = Object.fromEntries(formData.entries());

        const formValidetedData = await formSchema.validate(formObject);

        const formValidetedFormData = new FormData();
        Object.keys(formValidetedData).forEach((key) => {
            formValidetedFormData.append(key, formValidetedData[key]);
        });

        if (currentStay._id) {
            formValidetedFormData.append("id", currentStay._id);
        }

        handleStay({ formValidetedFormData, event });
    };

    useEffect(() => {
        if (currentStay) {
            setImage(currentStay.image);
            setStay(currentStay);
        }
    }, [currentStay]);

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            {formData.map((input) => (
                <label
                    className={styles.label}
                    key={input._id}
                    htmlFor={input._id}>
                    <span className={styles.titleInput}>{input.name}</span>
                    {image && input.inputType == "file" && (
                        <img src={image} width={150} alt="stay" />
                    )}
                    {input.inputType === "file" ? (
                        <input.fieldType
                            type={input.inputType}
                            id={input._id}
                            name={input.fieldName}
                            placeholder={input.placeholder}
                            className={styles.input}
                            onChange={onImageChange}
                        />
                    ) : (
                        <input.fieldType
                            type={input.inputType}
                            id={input._id}
                            name={input.fieldName}
                            placeholder={input.placeholder}
                            rows={input.rows}
                            className={styles.input}
                            value={stay[input.fieldName] || ""}
                            onChange={onChangeHandler}
                        />
                    )}
                </label>
            ))}

            <button type="submit" className={styles.button}>
                {currentStay._id ? "Update activity" : " Add new activity"}
            </button>
            <button
                onClick={onResetCLickBtn}
                type="reset"
                className={styles.buttonReset}>
                Reset
            </button>
            {error && (
                <p className={styles.error}>
                    {error.slice(0, 1).toUpperCase()}
                    {error.slice(1)}
                </p>
            )}
        </form>
    );
};

export default BackofficeFormHandler;
