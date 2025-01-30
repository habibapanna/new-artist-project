import Abstract from "../../Abstract/Abstract";
import ArtworkPage from "../../ArtworkPage/ArtworkPage";
import Floral from "../../Floral/Floral";


const Portfolio = () => {
    return (
        <div className="min-h-screen mx-auto max-w-7xl">
            <ArtworkPage></ArtworkPage>
            <Abstract></Abstract>
            <Floral></Floral>
        </div>
    );
};

export default Portfolio;