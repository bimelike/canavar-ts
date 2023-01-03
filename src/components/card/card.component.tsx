import "./card.styles.css";
import { Canavar } from "../../App"

type CardProps = {
  canavar: Canavar
}

const Card = ({ canavar }: CardProps) => (
  <div className="card-container" key={canavar.id}>
    <img
      src={`https://robohash.org/${canavar.id}?set=set2&size=180x180`}
      alt={`canavar ${canavar.name}`}
    />
    <h2>{canavar.name}</h2>
    <p>{canavar.email}</p>
  </div>
);

export default Card;
