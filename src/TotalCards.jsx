import cardsObj from "./Cards.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function TotalCards() {
  return (
        <div>
    <Link to='/cart' className="m-8">cart</Link> 
    <div className="flex flex-row flex-wrap gap-4">
      {cardsObj.cards.length > 0
        ? cardsObj.cards.map((card) => {
            return <Cards key={card.id} card={card} />;
          })
        : ""}
    </div>
    </div>
  );
}
export default TotalCards;
