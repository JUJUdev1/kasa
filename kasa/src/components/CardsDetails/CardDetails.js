import ImageSlider from "./components/ImageSlider";
import accomodationsData from "../../data/AnnoncesData";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Collapsibles from "../Collapsibles/Collapsibles";
import Host from "./components/Host";
import Tag from "./components/Tag";
import Rating from "./components/Rating";

const AccomodationCard = () => {
  const [accomodations, setAccomodations] = useState(accomodationsData);
  const idAccomodotion = useParams();
  const accomodationID = accomodations.find(
    (accomodation) => accomodation.id === idAccomodotion.id
  );

  const EquipementsList = accomodationID.equipments.map((equipement) => (
    <li key={equipement.id}>{equipement}</li>
  ));

  return (
    <div className="cardDetails">
      <div key={accomodationID.id}>
        <ImageSlider
          key={accomodationID.id}
          accomodation={accomodationID}
          pictures={accomodationID.pictures}
        />
      </div>
      <div className="cardDetails_container">
        <div className="cardDetails_container2">
          <h2>{accomodationID.title}</h2>
          <h3>{accomodationID.location}</h3>
          <Tag tags={accomodationID.tags} />
        </div>
        <div className="cardDetails_container3">
          <Host host={accomodationID.host} />
          <Rating ratings={accomodationID.rating} />
        </div>
      </div>

      <div className="cardDetails_collapse">
        <Collapsibles
          key={accomodationID.description}
          title="Description"
          description={accomodationID.description}
        />
        <Collapsibles
          key={accomodationID.equipments}
          title="Equipements"
          description={
            <ul key={accomodationID.equipments}>{EquipementsList}</ul>
          }
        />
      </div>
    </div>
  );
};
export default AccomodationCard;
