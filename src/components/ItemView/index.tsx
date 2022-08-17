import React from "react";
import './ItemView.css';

export interface ItemViewProps {
  id: number,
  name: string,
  description: string,
  retailPrice: number,
  quantity: number,
  setQuantity: (id: number, value: number) => void,
}

const ItemView = (props: ItemViewProps) => {
  const { id, name, description, retailPrice, quantity, setQuantity } = props;

  const handleAddItem = (e: any) => {
    e.stopPropagation();
    console.log('On add item');
    setQuantity(id, quantity + 1);
  }

  const handleDeductItem = () => {
    setQuantity(id, quantity > 0 ? quantity - 1 : 0);
  }

  return (
    <div className='item-view' key={id} >
      <h3 className="item-name">{name}</h3>
      <h4 className="item-description">{description}</h4>
      <h4 className="item-retail-price">{retailPrice}</h4>
      <h4 className="item-quantity">{quantity}</h4>
      <button className="btn" onClick={handleAddItem}>(+)</button>
      <button className="btn" onClick={handleDeductItem}>(-)</button>
    </div>
  )
}

export default ItemView;
