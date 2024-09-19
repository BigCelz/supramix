import React from "react";
import Card from "react-bootstrap/Card";
import "./ItemCard.css";
import { useCart } from "react-use-cart";

const ItemCard = (props) => {
  const { addItem } = useCart();
  return (
    <div className="col-12 col-md-6 col-lg-3 mx-0  itemcard">
      <Card className="shadow card">
        <Card.Body>
          <img src={props.image} alt="" className="img" />
          <div className="mt-3">
            <Card.Title className="title">{props.title}</Card.Title>
            <Card.Text className="price">${props.price}</Card.Text>
          </div>
          <div className="mt-4 mx-0">
            <button onClick={() => addItem(props.item)} className="btn">
              Add To Cart
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCard;
