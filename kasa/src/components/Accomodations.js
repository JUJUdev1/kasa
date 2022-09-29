import React, { useState } from "react";
import AnnoncesData from "../data/AnnoncesData";

const Accomodations = () => {
  const [annonces, setAnnonces] = useState(AnnoncesData);
  return (
    <div className="accomodations">
      {annonces.map((item) => {
        return (
          <article key={item.id}>
            
              <img src={item.cover} alt={item.title} />
            
            <div className="accomodations_location">
                  <h4>{item.location}</h4>
                </div>
          </article>
        );
      })}
    </div>
  );
};

export default Accomodations;
