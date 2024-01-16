import "../css/ShopItem.css";

export default function ShopItem(props) {
  const {card} = props;
  return (
    <div className="item">
      <img src={card.img} alt={card.name} className="item_img"></img>
      <h3 className="item_name">{card.name}</h3>
      <span className="item_color">{card.color}</span>
      <div className="item_price">${card.price}</div>
      <button className="item_btn">Add to cart</button>
    </div>
  );
}
