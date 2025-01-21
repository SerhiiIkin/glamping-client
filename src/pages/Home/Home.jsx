import PromoGlampingSection from "../../components/PromoGlampingSection/PromoGlampingSection";
import Reviews from "../../components/Reviews/Reviews";
import Welcome from "./../../components/Welcome/Welcome";
import bgImage from "/image_00.jpg";

const Home = () => {
    return (
        <>
            <Welcome
                isHome
                subtitle="Gittes"
                title="Glamping"
                bgImage={bgImage}
            />
            <PromoGlampingSection />
            <Reviews />
        </>
    );
};

export default Home;
