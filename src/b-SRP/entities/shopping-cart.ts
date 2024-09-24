import { CartItem } from "./interfaces/cart-item";


export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  addProduct(item: CartItem): void {
    this._items.push(item);
  }

  removeProduct(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return parseFloat(this._items
    .reduce((total, next) => total + next.price, 0)
    .toFixed(2));
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
    console.log('Shopping cart has been cleared.');
  }

}
