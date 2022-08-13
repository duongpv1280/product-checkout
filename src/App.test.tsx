import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Item from './data-model/Item';
import Checkout from './services/checkout.service';
import PriceRule from './data-model/PriceRule';
import DealXForY from './data-model/DealXForY';
import DealFixPrice from './data-model/DealFixPrice';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Case 1 - default customer', () => {
  const items = [
    new Item(1, 'Small Pizza', '10" pizza for one person', 11.99),
    new Item(2, 'Medium Pizza', '12" pizza for two persons', 15.99),
    new Item(3, 'Large Pizza', '15" pizza for four persons', 21.99),
  ];

  const priceRules: PriceRule[] = [];

  const co: Checkout = new Checkout(priceRules);
  co.add(items[0]);
  co.add(items[1]);
  co.add(items[2]);

  const total = co.total();
  expect(total).toEqual(49.97);
});

test('Case 2 - Microsoft customer', () => {
  const items = [
    new Item(1, 'Small Pizza', '10" pizza for one person', 11.99),
    new Item(2, 'Medium Pizza', '12" pizza for two persons', 15.99),
    new Item(3, 'Large Pizza', '15" pizza for four persons', 21.99),
  ];

  const priceRules: PriceRule[] = [
    new DealXForY('3 for 2', 1, 3, 2, 'Gets a 3 for 2 deal for Small Pizzas'),
  ];

  const co: Checkout = new Checkout(priceRules);
  co.add(items[0]);
  co.add(items[0]);
  co.add(items[0]);
  co.add(items[2]);

  const total = co.total();
  expect(total).toEqual(45.97);
});

test('Case 3 - Amazon customer', () => {
  const items = [
    new Item(1, 'Small Pizza', '10" pizza for one person', 11.99),
    new Item(2, 'Medium Pizza', '12" pizza for two persons', 15.99),
    new Item(3, 'Large Pizza', '15" pizza for four persons', 21.99),
  ];

  const priceRules: PriceRule[] = [
    new DealFixPrice('Fix price', 3, 1, 19.99, 'Gets a discount on Large Pizza where the price drops to $19.99 per pizza'),
  ];

  const co: Checkout = new Checkout(priceRules);
  co.add(items[1]);
  co.add(items[1]);
  co.add(items[1]);
  co.add(items[2]);

  const total = co.total();
  expect(total).toEqual(67.96);
});
