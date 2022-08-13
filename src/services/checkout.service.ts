import DefaultRule from "../data-model/DefaultRule";
import Item from "../data-model/Item";
import PriceRule from "../data-model/PriceRule";

class Checkout {
  itemList: Item[] = [];
  rules: PriceRule[] = [];

  constructor(
    priceRules: PriceRule[]
  ) {
    this.rules = priceRules;
  }

  add(item: Item) {
    this.itemList.push(item);

    if (this.rules.findIndex(rule => rule.itemId === item.id) < 0) {
      this.rules.push(new DefaultRule(item.id));
    }
  }

  total(): number {
    let total: number = 0;

    this.rules.forEach(rule => {
      total += rule.totalAmount(this.itemList);
    });

    return total;
  }
}

export default Checkout;