import React, {useState} from 'react';
import './App.css';
import ItemListView from './components/ItemListView';
import CheckoutView from './components/CheckoutView';
import CustomerView from './components/CustomerView';
import Checkout from './services/checkout.service';
import { promotions } from './data-model/promotions';
import PriceRule from './data-model/PriceRule';

function App() {
  const [itemList, setItemList] = useState([
    {id: 1, name: 'Small Pizza', description: '10" pizza for one person', retailPrice: 11.99, quantity: 0},
    {id: 2, name: 'Medium Pizza', description: '12" Pizza for two persons', retailPrice: 15.99, quantity: 0},
    {id: 3, name: 'Large Pizza', description: '15" Pizza for four persons', retailPrice: 21.99, quantity: 0},
  ]);

  const [total, setTotal] = useState(0);
  const [customerName, setCustomerName ] = useState('');

  const handleSetQuantity = (id: number, value: number) => {
    console.log('handleSetQuantity');
    setItemList((prev) => {
      console.log('setItemList');
      console.log(prev);
      return prev.map(item => {
        if (item.id === id) {
          console.log(value);
          item.quantity = value;
        }

        return item;
      })
    });
  }

  const handleCheckoutButton = () => {
    const rules = promotions(customerName.toLowerCase());

    const co: Checkout = new Checkout(rules);
    itemList.forEach(item => {
      for(let i = 0; i < item.quantity; i++)
        co.add(item);
    });
    setTotal(co.total());
  }

  const onChangeCustomerName = (value: any) => {
    value.preventDefault();
    setCustomerName(value.target.value);
  }

  return (
    <div className="App">
      <ItemListView 
        itemList={itemList} 
        handleSetQuantity={handleSetQuantity} />
        <hr
      style={{
          color: "grey",
          backgroundColor: "grey",
          height: 5
      }}
  />
      <div className='checkout-info'>
        <CustomerView 
          name={customerName}
          onInputChange={onChangeCustomerName}
        />
        <CheckoutView 
          total={total}
          handleCheckoutButton={handleCheckoutButton}
        />
      </div>
    </div>
  );
}

export default App;
