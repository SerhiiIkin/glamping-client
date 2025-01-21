import styles from "./promoglampingsection.module.css";
import Info from "./../Info/Info";
import Link from './../Link/Link';

const PromoGlampingSection = () => {
    const infoData = {
        title: "Kom og prøv glamping hos Gitte!",
        description:
            "Vi er stolte af at byde dig velkommen til Gitte’s Glamping, hvor hjertevarme og omsorg møder naturens skønhed og eventyr. Vores dedikerede team, anført af Gitte selv, er her for at skabe den perfekte ramme om din luksuriøse udendørsoplevelse. Vi stræber efter at skabe minder og fordybelse, uanset om du besøger os som par, familie eller soloeventyrer. Vi tilbyder en bred vifte af aktiviteter og arrangementer, der passer til alle aldre og interesser. Udforsk naturen, slap af ved bålet, del historier med nye venner, eller find indre ro med vores wellnessaktiviteter.",
    };

    return (
        <section className={styles.promoglamping}>
            <div className={`container ${styles.container}`}>
                <Info {...infoData} />
                <img className={styles.image} src="gitte.jpg" alt="gitte" />
                <Link to="/stays" className={styles.link}> se vores ophold </Link>
            </div>
        </section>
    );
};

export default PromoGlampingSection;
