import Button from "./../Button/Button";
import styles from "./loginform.module.css";
import useLoginForm from "./../../hooks/useLoginForm.hook";

const LoginForm = () => {
    const { error, submitHandler,onResetBtnCLick } = useLoginForm();

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <input
                className={styles.input}
                type="text"
                placeholder="Email"
                name="email"
            />
            <input
                className={styles.input}
                type="password"
                placeholder="Password"
                name="password"
            />
            <div className={styles.buttonContainer}>
                <Button className={styles.button} type="submit">
                    Login
                </Button>
                <Button className={styles.button} type="reset" onClick={onResetBtnCLick}>
                    Reset
                </Button>
            </div>
            {error && <p className={styles.error}>{error}</p>}
        </form>
    );
};
export default LoginForm;
