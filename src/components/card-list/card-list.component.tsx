import Card from "../card/card.component";
import {Canavar} from"../../App"

import "./card-list.styles.css";

type CardListProps = {
  canavarlar : Canavar[]
}

const CardList = ({ canavarlar }:CardListProps) => (
  <div className="card-list">
    {canavarlar.map((canavar) => {
      return <Card canavar={canavar}/>;
    })}
  </div>
);

export default CardList;
