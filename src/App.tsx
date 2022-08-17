import React, {useState} from 'react';
import './App.css';
import ItemListView from './components/ItemListView';
import CheckoutView from './components/CheckoutView';

function App() {
  const [itemList, setItemList] = useState([
    {id: 1, name: 'Small Pizza', description: '10" pizza for one person', retailPrice: 11.99, quantity: 0},
    {id: 2, name: 'Medium Pizza', description: '12" Pizza for two persons', retailPrice: 15.99, quantity: 0},
    {id: 3, name: 'Large Pizza', description: '15" Pizza for four persons', retailPrice: 21.99, quantity: 0},
  ]);

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

  return (
    <div className="App">
      <ItemListView 
        itemList={itemList} 
        handleSetQuantity={handleSetQuantity} />
      <CheckoutView />
    </div>
  );
}

export default App;
