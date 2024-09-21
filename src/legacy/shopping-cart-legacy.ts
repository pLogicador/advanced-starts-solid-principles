type Product = {name: string, price: number};
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _products: Product[] = [];
  private _orderStatus: OrderStatus = 'open';

  get products(): Readonly<Product[]> {
    return this._products;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  addProduct(product: Product): void {
    this._products.push(product);
  }

  removeProduct(index: number): void {
    this._products.splice(index, 1);
  }

  total(): number {
    return parseFloat(this._products
    .reduce((total, next) => total + next.price, 0)
    .toFixed(2));
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log("Your shopping cart is empty.");
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Your order with total ${this.total()} has been received.`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._products.length === 0;
  }

  sendMessage(msg: string): void {
    console.log(`Message sent: ${msg}`);
  }

  saveOrder(): void {
    console.log('Order(s) saved successfully!...');
  }

  clear(): void {
    this._products.length = 0;
    console.log('Shopping cart has been cleared.');
  }

}

const myCart = new ShoppingCartLegacy();
myCart.addProduct({name: 'Shoes', price: 45.55555});
myCart.addProduct({name: 'Short', price: 29.9});
myCart.addProduct({name: 'pencil', price: 5.10});
// myCart.clear();

console.log(myCart.products);
console.log(myCart.total());

console.log(myCart.orderStatus);
myCart.checkout();
console.log(myCart.orderStatus);
