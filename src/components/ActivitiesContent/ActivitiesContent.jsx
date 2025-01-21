import Info from "./../Info/Info";
import ContentLayout from "./../../layouts/ContentLayout/ContentLayout";
const ActivitiesContent = () => {
    const infoData = {
        title: "Ingen skal kede sig hos Gitte",
        description:
            "Glamping er mere end blot en indkvartering - det er en mulighed for at fordybe dig i naturen og skabe minder, der varer livet ud. Uanset om du foretrækker en eventyrlig kanotur, en oplysende naturvandring, hjertevarm samvær omkring bålet, smagfulde oplevelser som vinsmagning eller morgenyoga, der giver dig indre ro og balance i naturens skød - vil vi hos Gittes Glamping imødekomme dine ønsker.",
    };

    return (
        <ContentLayout>
            <Info {...infoData} />
        </ContentLayout>
    );
};
export default ActivitiesContent;
