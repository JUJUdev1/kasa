import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const Collapsible = () => {
  const collapseDetails = [
    {
      id: 1,
      title: "Fiabilité",
      description:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      id: 2,
      title: "Respect",
      description:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      id: 3,
      title: "Service",
      description:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      id: 4,
      title: "Sécurité",
      description:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  const [collapseList, setCollapseList] = useState(collapseDetails);
  return (
    <div className="collapsibles">
      {collapseList.map((item) => {
        return (
          <Accordion style={{ margin:10,borderRadius: 10,width: '80%' }}   key={item.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ borderRadius: 10, backgroundColor: "#FF6060", color: "#fff",margin:0, }}
            >
              <Typography>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ borderRadius: 10 , backgroundColor: "#F6F6F6", color: "#FF6060",}}>
              <Typography>{item.description}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default Collapsible;
