import ShopCard from "./ShopCard";
import '../css/CardsView.css'

export default function CardsView({ cards }) {
  return (
    <div className="view-module">
      {cards.map((card, i) => (
        <ShopCard key={i} card={card} />
      ))}
    </div>
  );
}
