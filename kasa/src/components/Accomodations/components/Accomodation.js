import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <NavLink
      className="accomodation"
      to={`/fiche-Logement/${props.accomodation.id}`}
    >
      <article key={props.accomodation.id}>
        <img src={props.accomodation.cover} alt={props.accomodation.title} />
        <p>{props.accomodation.title}</p>
      </article>
    </NavLink>
  );
};

export default Card;
