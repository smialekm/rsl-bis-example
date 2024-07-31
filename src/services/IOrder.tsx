import { Order, OrderSearch, OrderEnum } from "../viewmodel/ViewModel";

export interface IOrder {
	readOrder(orderSearch: OrderSearch): Order;
	checkOrder(order: Order): OrderEnum;
	updateOrder(order: Order): bigint;
}

export class OrderProxy implements IOrder{

	readOrder(orderSearch: OrderSearch): Order {
		return new Order();
	}
	checkOrder(order: Order): OrderEnum {
		return OrderEnum[0];
	}
	updateOrder(order: Order): bigint {
		return BigInt(0);
	}
}

