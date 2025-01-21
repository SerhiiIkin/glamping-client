import Welcome from "./../../components/Welcome/Welcome";
import bgImage from "/image_04.jpg";
import ActivitiesContent from "./../../components/ActivitiesContent/ActivitiesContent";
import Activities from "./../../components/Activities/Activities";
import BackgroundLayout from "./../../layouts/BackgroundLayout/BackgroundLayout";
const ActivitiesPage = () => {
    return (
        <>
            <Welcome bgImage={bgImage} title="Aktiviteter" />
            <BackgroundLayout>
                <ActivitiesContent />
                <Activities />
            </BackgroundLayout>
        </>
    );
};

export default ActivitiesPage;
