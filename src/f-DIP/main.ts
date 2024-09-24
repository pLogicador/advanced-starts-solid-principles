// Client code (main)
import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";
import { NoDiscount, TenPercentDiscount } from "./classes/discount";
import { EnterpriseCustomer, IndividualCustomer } from "./classes/customer";

// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const myCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
/*const individualCustomer = new IndividualCustomer(
  'Pedro',
  'Miranda',
  '111.111.111-11'
);
*/
const enterpriseCustomer = new EnterpriseCustomer(
  'Enterprise x',
  '1212121212'
);
const order = new Order(
  myCart,
  messaging,
  persistency,
  enterpriseCustomer
);

myCart.addItem(new Product('Shoes', 45.55555));
myCart.addItem(new Product('Short', 29.9));
myCart.addItem(new Product('pencil', 5.10));
// myCart.clear();

console.log(myCart.items);
console.log(myCart.total());
console.log(myCart.totalWithDiscount());

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
