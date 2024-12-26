import { Header } from "@/Common";
import Footer from "@/Common/Footer";
import ScrollTopButton from "@/Common/ScrollTop";
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
            <Footer />
            <ScrollTopButton />

        </div>
    );
}

export default Home;
