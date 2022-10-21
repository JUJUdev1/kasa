import Footer from "../components/Footer/Footer";
import Header from '../components/Header/Header';
import CardDetails from "../components/CardsDetails/CardDetails";
import NotFound from './NotFound';
import { useParams } from 'react-router-dom';
import accomodationsData from "../data/AnnoncesData";
import { useState } from 'react';



const AccomodationsCards = () => {
const [accomodations] = useState(accomodationsData);
const idAccomodotion = useParams();
const accomodationID = accomodations.find(
(accomodation) => accomodation.id === idAccomodotion.id
);

if (!accomodationID) {
return <NotFound />;
}

  return (
    <>
      <Header />
      <CardDetails />
      <Footer />
    </>
  );
};

export default AccomodationsCards;
