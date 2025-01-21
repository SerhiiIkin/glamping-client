import { useParams } from "react-router";
import useFetchById from "../../hooks/useFetchById.hook";
import Welcome from "./../../components/Welcome/Welcome";
import SingleStay from "../../components/SingleStay/SingleStay";

const StayPage = () => {
    const { id } = useParams();
    const { data } = useFetchById({ path: "stay", id });

    return (
        <>
            {data?._id && (
                <>
                    <Welcome bgImage={data?.image} title={data?.title} />
                    <SingleStay data={data} />
                </>
            )}
        </>
    );
};
export default StayPage;
