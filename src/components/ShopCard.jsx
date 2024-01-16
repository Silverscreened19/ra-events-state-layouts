import '../css/ShopCard.css'

export default function ShopCard(props) {
  const {card} = props;
  return (
    <div className="card">
      <img className="card_img" src={card.img} alt={card.name}></img>
      <div className="card_content">
        <h3 className="card_name">{card.name}</h3>
        <span className="card_color">{card.color}</span>
        <div className="card_footer">
          <div className="card_price">${card.price}</div>
          <button className="card_btn">Add to cart</button>
        </div>

      </div>


    </div>
  );
}
