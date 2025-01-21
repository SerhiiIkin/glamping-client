import Welcome from "../../components/Welcome/Welcome";
import KontaktContent from "../../components/KontaktContent/KontaktContent";
import bgImage from "/image_03.jpg";
const KontaktPage = () => {
    return (
        <>
            <Welcome bgImage={bgImage} title="Kontakt Gitte" />
            <KontaktContent />
        </>
    );
};

export default KontaktPage;
