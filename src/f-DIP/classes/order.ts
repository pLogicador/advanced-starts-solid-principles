import { OrderStatus } from "./interfaces/order-status";
import { CustomerOrder } from "./interfaces/customer-protocol";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";
import { MessagingProtocol } from "./interfaces/messaging-protocol";
import { PersistencyProtocol } from "./interfaces/persistency-protocol";

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log("Your shopping cart is empty.");
      return;
    }
    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Your order with total ${this.cart.totalWithDiscount()} has been received.`
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      `The client is ${this.customer.getName()}, ${this.customer.getIDN()}`
    );
  }

}
