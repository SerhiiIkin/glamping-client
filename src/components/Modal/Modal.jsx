import styles from "./modal.module.css";
import { PropTypes } from "prop-types";
import Title from "./../Title/Title";
import { IoMdClose } from "react-icons/io";
import Button from "./../Button/Button";
const Modal = ({ open, name, setOpen }) => {
    return (
        <>
            {open && (
                <dialog className={styles.modal}>
                    <Button
                        className={styles.button}
                        onClick={() => setOpen(false)}
                    >
                        <IoMdClose />
                    </Button>
                    <div aria-label="modal-container" className="container">
                        <Title type="h4" className={styles.title}>
                            Hej {name}, Tak for din besked! Du hører fra os
                            snarest.
                        </Title>
                        <Button
                            className={styles.back}
                            onClick={() => setOpen(false)}
                        >
                            Tilbage
                        </Button>
                    </div>
                </dialog>
            )}
        </>
    );
};

Modal.propTypes = {
    open: PropTypes.bool,
    name: PropTypes.string,
    setOpen: PropTypes.func,
};

export default Modal;
