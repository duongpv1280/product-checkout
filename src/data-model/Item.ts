class Item {
  id: number;
  name: string = '';
  description: string = '';
  retailPrice: number = 0;

  constructor(id: number, name?: string, description?: string, price?: number) {
    this.id = id;
    this.name = name || '';
    this.description = description || '';
    this.retailPrice = price || 0;
  }
}

export default Item;
