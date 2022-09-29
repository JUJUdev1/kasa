import Navigation from "../components/Navigation";
import Banner from '../components/Banner';
import Accomodations from '../components/Accomodations';



const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <Banner />
            <Accomodations />
        </div>
    );
};

export default Home;