// Client code (main)
import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";
import { NoDiscount, TenPercentDiscount } from "./classes/discount";

// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const myCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(myCart, messaging, persistency);

myCart.addProduct(new Product('Shoes', 45.55555));
myCart.addProduct(new Product('Short', 29.9));
myCart.addProduct(new Product('pencil', 5.10));
// myCart.clear();

console.log(myCart.items);
console.log(myCart.total());
console.log(myCart.totalWithDiscount());

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
