import Info from "../Info/Info";
import styles from "./aboutophold.module.css";
const AboutOphold = () => {
    const infoData = {
        title: "Vi har ophold til enhver smag",
        description:
            "Vores glampingophold er skabt til at tilbyde en kombination af eventyr og afslapning. Det er den ideelle flugt fra byens støj og stress, og det perfekte sted at genoplade batterierne i en naturskøn indstilling.Book dit ophold i dag og giv dig selv lov til at fordybe dig i naturen og nyde luksus i det fri. Vi ser frem tid at byde dig velkommen til en oplevelse fyldt med komfort, eventyr og skønhed.",
    };

    return (
        <section className={styles.about}>
            <div className="container">
                <Info {...infoData} />
            </div>
        </section>
    );
};
export default AboutOphold;
