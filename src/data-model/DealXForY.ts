import Item from "./Item";
import PriceRule from "./PriceRule";

class DealXForY extends PriceRule {
  discountQty: number = 0;

  constructor(
    name: string, itemId: number, triggerQty?: number, discountQty?: number, description?: string
  ) {
    super(name, itemId, triggerQty, description);
    this.discountQty = discountQty || 0;
  }

  totalAmount(itemList: Item[]): number {
    let total: number = 0;
    const items: Item[] = itemList.filter(item => item.id === this.itemId);
    if (items.length === 0) {
      return 0;
    }
    const unitPrice = items[0].retailPrice;

    const blockOfDiscountQty = Math.floor(items.length / this.triggerQty);
    const totalDiscountQty = blockOfDiscountQty * this.discountQty;
    const fullPaidQty = items.length - (blockOfDiscountQty * this.triggerQty);
    total = (totalDiscountQty + fullPaidQty) * unitPrice;

    return total;
  }
}

export default DealXForY;
