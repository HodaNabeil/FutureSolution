import Header from "../../Common/Header";
import Landing from "../../Components/Home/Landing";
import OurServices from "../../Components/Home/OurServices";


const Home = () => {
    return (
        <div className="overflow-hidden">
            <Header />

            <Landing></Landing>
            <OurServices />

        </div>
    );
}

export default Home;
