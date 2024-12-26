import Header from "@/Common/Header";
import Contact from "@/Components/Home/Contact";
import Landing from "@/Components/Home/Landing";
import OurServices from "@/Components/Home/OurServices";
import ReviewSlider from "@/Components/Home/ReviewSlider";


const Home = () => {
    return (
        <div className="overflow-hidden">
            <Header />
            <Landing />
            <OurServices />
            <Contact />
            <ReviewSlider />

        </div>
    );
}

export default Home;
