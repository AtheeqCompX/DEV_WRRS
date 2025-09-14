
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/Footer";
import Banner from "../Components/Shared/Banner";
import OurStory from "../Components/About/OurStory";
import OurValues from "../Components/About/OurValues";
export default function About() {
    return (
        <div>
            <Header />
            <Banner heading="About" />
            <OurStory />
            <OurValues />
     
            <Footer />
        </div>
    );
};