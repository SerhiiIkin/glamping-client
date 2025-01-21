import MyList from "../../components/MyList/MyList";
import Welcome from "./../../components/Welcome/Welcome";
import ContentLayout from "./../../layouts/ContentLayout/ContentLayout";
import Title from "./../../components/Title/Title";
import { useLocalStorage } from "@uidotdev/usehooks";
import BackgroundLayout from "./../../layouts/BackgroundLayout/BackgroundLayout";

const MyListPage = () => {
    const [activitiStorage] = useLocalStorage("activiti", []);

    return (
        <>
            <Welcome bgImage="/image_05.jpg" title="Min liste" />
            <BackgroundLayout>
                <ContentLayout>
                    <Title type="h2">
                        Antal aktiviteter på listen:
                        <p>{activitiStorage.length}</p>
                    </Title>
                </ContentLayout>

                <MyList />
            </BackgroundLayout>
        </>
    );
};

export default MyListPage;
