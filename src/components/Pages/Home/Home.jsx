import Exhibitions from "../../Exhibitions/Exhibitions";
import MoreE from "../../MoreE/MoreE";
import MyStory from "../../MyStory/MyStory";
import RecentArtworks from "../../RecentArtworks/RecentArtworks";


const Home = () => {
    return (
        <div>
            <RecentArtworks></RecentArtworks>
            <MyStory></MyStory>
            <Exhibitions></Exhibitions>
            <MoreE></MoreE>
        </div>
    );
};

export default Home;