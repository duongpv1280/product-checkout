import Item from "./Item";

abstract class PriceRule {
  name: string;
  itemId: number;
  description?: string;
  triggerQty: number = 1;
  discount?: number;

  constructor(name: string, itemId: number, triggerQty?: number, description?: string) {
    this.name = name;
    this.itemId = itemId;
    this.description = description;
    this.triggerQty = triggerQty || 1;
    this.discount = 0;
  }

  abstract totalAmount(itemList: Item[]): number;
}

export default PriceRule;
