import Item from "./Item";
import PriceRule from "./PriceRule";

class DealFixPrice extends PriceRule {
  fixPrice: number = 0;
  constructor(
    name: string, itemId: number, triggerQty: number, fixPrice: number, description?: string
  ) {
    super(name, itemId, triggerQty, description);
    this.fixPrice = fixPrice;
  }


  totalAmount(itemList: Item[]): number {
    let total: number = 0;

    const items: Item[] = itemList.filter(item => item.id === this.itemId);
    if (items.length === 0) {
      return 0;
    }

    total = items.length * this.fixPrice;
   
    return total;
  }
}

export default DealFixPrice;
