import styles from "./form.module.css";
import Button from "../Button/Button";
import { object, string } from "yup";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { toast } from "react-toastify";

const Form = () => {
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);

    const [name, setName] = useState("");

    const formData = [
        {
            _id: 1,
            name: "Navn",
            fieldName: "name",
            fieldType: "input",
        },
        {
            _id: 2,
            name: "Email",
            fieldName: "email",
            fieldType: "input",
        },
        {
            _id: 3,
            name: "Hvad drejer henvendelsen sig om?",
            fieldName: "subject",
            fieldType: "input",
        },
        {
            _id: 4,
            name: "Besked (Skriv dato’er, hvis det drejer sig om en booking)",
            fieldName: "message",
            fieldType: "textarea",
            rows: 10,
        },
    ];

    const formSchema = object({
        name: string().required(),
        email: string().email().required(),
        subject: string().required(),
        message: string().required(),
    });

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData(event.target);
            const formObject = Object.fromEntries(formData.entries());

            const formValidetedData = await formSchema.validate(formObject);

            const url = `${import.meta.env.VITE_SERVER_URL}/contact`;

            const reponse = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formValidetedData),
            });

            const { data } = await reponse.json();

            if (data.name) {
                setName(data.name);
                setOpen(true);
                setError("");
            }

            if (reponse.ok) {
                event.target.reset();
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <form onSubmit={submitHandler} className={styles.form}>
                {formData.map((input) => (
                    <label
                        className={styles.label}
                        key={input._id}
                        htmlFor={input._id}
                    >
                        <span className={styles.titleInput}>{input.name}</span>
                        <input.fieldType
                            type="text"
                            id={input._id}
                            name={input.fieldName}
                            rows={input.rows}
                            className={styles.input}
                        />
                    </label>
                ))}

                <Button type="submit" className={styles.button}>
                    Indsend
                </Button>
                {error && (
                    <p className={styles.error}>
                        {error.slice(0, 1).toUpperCase()}
                        {error.slice(1)}
                    </p>
                )}
            </form>
            <Modal open={open} name={name} setOpen={setOpen} />
        </>
    );
};
export default Form;
