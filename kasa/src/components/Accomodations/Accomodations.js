import { useState } from "react";
import accomodationsData from "../../data/AnnoncesData";
import Accomodation from "./components/Accomodation";

const Accomodations = () => {
  const [accomodations, setAccomodations] = useState(accomodationsData);
  return (
    <div className="accomodations">
      {accomodations.map((accomodation) => {
        return (
        <Accomodation
          accomodation={accomodation}
          key={accomodation.id}
        />
        );
      })}
    </div>
  );
};

export default Accomodations;
