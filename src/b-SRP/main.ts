// Client code (main)
import { Messaging } from "./services/messaging";
import { Order } from "./entities/order";
import { Persistency } from "./services/persistency";
import { Product } from "./entities/product";
import { ShoppingCart } from "./entities/shopping-cart";

const myCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(myCart, messaging, persistency);

myCart.addProduct(new Product('Shoes', 45.55555));
myCart.addProduct(new Product('Short', 29.9));
myCart.addProduct(new Product('pencil', 5.10));
// myCart.clear();

console.log(myCart.items);
console.log(myCart.total());

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
