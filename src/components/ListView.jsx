import ShopItem from "./ShopItem";
import '../css/ListView.css'

export default function ListView({ cards }) {
  return (
    <div className="view-list">
      {cards.map((card, i) => (
        <ShopItem key={i} card={card} />
      ))}
    </div>
  );
}
