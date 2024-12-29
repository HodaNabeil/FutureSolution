import { Header } from "@/Common";
import Footer from "@/Common/Footer";
import ScrollTopButton from "@/Common/ScrollTop";
import Contact from "@/Components/Home/Contact";
import Landing from "@/Components/Home/Landing";
import OurServices from "@/Components/Home/OurServices";
import ReviewSlider from "@/Components/Home/ReviewSlider";
import { useLang } from "@/Hooks";
import { useSelector } from "react-redux";



const Home = () => {
    const Lang = useLang()
    const { Rtl } = useSelector(state => state.Helper)

    const MainProps = {
        Lang,
        Rtl
    }
    return (
        <div className="overflow-hidden">
            <Header />
            <Landing {...MainProps} />
            <OurServices {...MainProps} />
            <Contact {...MainProps} />
            <ReviewSlider  {...MainProps} />
            <Footer  {...MainProps} />
            <ScrollTopButton />

        </div>
    );
}

export default Home;
