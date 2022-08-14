import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './components/ItemList';
import CheckoutDialog from './components/CheckoutDialog';

function App() {
  return (
    <div className="App">
      <ItemList />
      <CheckoutDialog />
    </div>
  );
}

export default App;
