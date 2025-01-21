import styles from "./kontaktcontent.module.css";
import Info from "../Info/Info";
import Form from '../Form/Form';
const KontaktContent = () => {
    const infoData = {
        title: "Vil du booke et ophold? Eller har du blot et spørgsmål?",
        description:
            "Så tøv ikke med at tage kontakt til os herunder.Vi bestræber os på at svare på henvendelser indenfor 24 timer, men op til ferier kan der være travlt, og svartiden kan derfor være op til 48 timer.",
    };
    return (
        <section className={styles.content}>
            <div className="container">
                <Info {...infoData} />
                <Form />
            </div>
        </section>
    );
};
export default KontaktContent;
