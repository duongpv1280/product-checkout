import DealFixPrice from "./DealFixPrice";
import DealXForY from "./DealXForY";
import DefaultRule from "./DefaultRule";

export const promotions = (customerName: string) => {
  switch (customerName) {
  case 'microsoft': 
    return [new DealXForY('3 for 2', 1, 3, 2, 'Gets a 3 for 2 deal for Small Pizzas')];
  case 'amazon': 
    return [new DealFixPrice('Fix price', 3, 1, 19.99, 'Gets a discount on Large Pizza where the price drops to $19.99 per pizza')];
  case 'facebook': 
    return [new DealXForY('5 for 4', 2, 5, 4, 'Gets a 5 for 4 deal for Medium Pizzas')];
  default: 
    return [new DefaultRule(1),new DefaultRule(2), new DefaultRule(3)];
  }
}