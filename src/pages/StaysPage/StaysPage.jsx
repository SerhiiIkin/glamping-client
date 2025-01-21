import Welcome from "../../components/Welcome/Welcome";
import bgImage from "/image_01.jpg";
import AboutOphold from "../../components/AboutOphold/AboutOphold";
import Stays from "../../components/Stays/Stays";

const StaysPage = () => {
    return (
        <>
            <Welcome title="Vores ophold" bgImage={bgImage} />
            <AboutOphold />
            <Stays />
        </>
    );
};

export default StaysPage;
