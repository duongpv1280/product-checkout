import Item from "./Item";
import PriceRule from "./PriceRule";

class DefaultRule extends PriceRule {
  constructor(itemId: number) {
    super('No rule', itemId, 0, 'No price rule');
  }

  totalAmount(itemList: Item[]): number {
    const items: Item[] = itemList.filter(item => item.id === this.itemId);

    if (items.length === 0) {
      return 0;
    }
    
    return items.length * items[0].retailPrice;
  }

}

export default DefaultRule;
