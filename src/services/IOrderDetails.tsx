import { OrderDetails, OrderList, Order } from "../viewmodel/ViewModel";

export interface IOrderDetails {
	readOrderDetails(orderList: OrderList): OrderDetails;
	updateOrderDetails(orderDetails: OrderDetails, order: Order): bigint;
}

export class OrderDetailsProxy implements IOrderDetails{

	readOrderDetails(orderList: OrderList): OrderDetails {
		return new OrderDetails();
	}
	updateOrderDetails(orderDetails: OrderDetails, order: Order): bigint {
		return BigInt(0);
	}
}

