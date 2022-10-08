import { ReactComponent as Icon } from "../../../media/icones/star.svg";

const ColoredStar = () => {
  return <Icon fill="#FF6060" />;
};

const EmptyStar = () => {
  return <Icon fill="#ebe9e9" />;
};

function Rating(props) {
  return (
    <div className="stars">
      {Array.from({ length: parseInt(props.ratings) }
        ).map((_, index) => (
            <ColoredStar key={index} />
            ))}
        {Array.from({ length: 5 - parseInt(props.ratings) }
        ).map((_, index) => (
            <EmptyStar key={index} />
            ))}
      
    </div>
  );
}
export default Rating;
