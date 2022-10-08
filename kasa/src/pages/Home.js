import Banner from '../components/Banner/Banner';
import Accomodations from '../components/Accomodations/Accomodations';
import Footer from "../components/Footer/Footer";
import Header from '../components/Header/Header';



const Home = () => {
    return (
        <div className="home">
            <Header />
            <Banner  />
            <Accomodations />
            <Footer />
        </div>
    );
};

export default Home;