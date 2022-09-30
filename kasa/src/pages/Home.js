import Navigation from "../components/Navigation";
import Banner from '../components/Banner';
import Accomodations from '../components/Accomodations';
import Footer from "../components/Footer";



const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <Banner  />
            <Accomodations />
            <Footer />
        </div>
    );
};

export default Home;