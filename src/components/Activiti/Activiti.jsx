import styles from "./activiti.module.css";
import { PropTypes } from "prop-types";
import Title from "./../Title/Title";
import ContentLayout from "./../../layouts/ContentLayout/ContentLayout";
import Button from "./../Button/Button";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLocalStorage } from "@uidotdev/usehooks";

const Activiti = ({ activiti }) => {
    const [open, setOpen] = useState(false);
    const [activitiStorage, saveActivitiStorage] = useLocalStorage(
        "activiti",
        []
    );

    const Heard = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
        >
            <g clipPath="url(#clip0_17_699)">
                <path
                    d="M12.5 21.35L11.05 20.03C5.9 15.36 2.5 12.28 2.5 8.5C2.5 5.42 4.92 3 8 3C9.74 3 11.41 3.81 12.5 5.09C13.59 3.81 15.26 3 17 3C20.08 3 22.5 5.42 22.5 8.5C22.5 12.28 19.1 15.36 13.95 20.04L12.5 21.35Z"
                    fill="white"
                    fillOpacity="0.18"
                />
            </g>
            <defs>
                <clipPath id="clip0_17_699">
                    <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5)"
                    />
                </clipPath>
            </defs>
        </svg>
    );

    const onClickHeardButton = (currentActiviti) => {
        const isActiviti = activitiStorage.find(
            (a) => a._id === currentActiviti._id
        );

        saveActivitiStorage((prev) =>
            isActiviti
                ? prev.filter((a) => a._id !== currentActiviti._id)
                : [...prev, currentActiviti]
        );
    };

    return (
        <article aria-label="activiti-card">
            <div className={"container"}>
                <div className={styles.content}>
                    <Title type="h2">{activiti.title}</Title>
                </div>
            </div>
            <div
                className={styles.imageContainer}
                style={{
                    background: `linear-gradient(0deg, rgba(54, 54, 54, 0.56) 0%, rgba(54, 54, 54, 0.56) 100%), url(${activiti.image}) lightgray 50% / cover no-repeat`,
                }}
            ></div>
            <div className={"container"}>
                <ContentLayout className={styles.contentLayout}>
                    <div className={styles.info}>
                        <div>
                            <p> {activiti.date} </p>
                            <p> kl. {activiti.time} </p>
                        </div>
                        <Button
                            onClick={() => onClickHeardButton(activiti)}
                            className={`${styles.heardButton}  ${
                                activitiStorage.find(
                                    (a) => a._id === activiti._id
                                ) && styles.heard
                            } `}
                        >
                            <Heard />
                        </Button>
                    </div>
                    <div
                        onClick={() => setOpen((prev) => !prev)}
                        className={styles.details}
                    >
                        <summary className={styles.summary}>
                            Læs {open ? "mindre" : "mere"}
                            <IoIosArrowDown
                                className={` ${styles.icon}  ${
                                    open && styles.open
                                }`}
                            />
                        </summary>
                        {open && (
                            <p className={styles.description}>
                                {activiti.description}
                            </p>
                        )}
                    </div>
                </ContentLayout>
            </div>
        </article>
    );
};

Activiti.propTypes = {
    activiti: PropTypes.object.isRequired,
};

export default Activiti;
