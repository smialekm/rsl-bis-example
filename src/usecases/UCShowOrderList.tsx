import { OrderList, OrderDetails, ShowOrderListAtA1UnionEnum, ShowOrderListAtB1UnionEnum, ShowOrderListResultEnum, Order } from "../viewmodel/ViewModel";
import { POrderListWindow } from "../view/presenters/POrderListWindow";
import { POrderDetailsWindow } from "../view/presenters/POrderDetailsWindow";
import { IOrderList } from "../services/IOrderList";
import { IOrderDetails } from "../services/IOrderDetails";
import { UCFindOrder } from "./UCFindOrder";
import { UCAddOrder } from "./UCAddOrder";
import { UCDeleteOrders } from "./UCDeleteOrders";
import { UCEditOrder } from "./UCEditOrder";

export class UCShowOrderList{
	pOrderListWindow: POrderListWindow;
	pOrderDetailsWindow: POrderDetailsWindow;

	iOrderList: IOrderList;
	iOrderDetails: IOrderDetails;

	findOrder: UCFindOrder | undefined;
	addOrder: UCAddOrder | undefined;
	deleteOrders: UCDeleteOrders | undefined;
	editOrder: UCEditOrder | undefined;

	returnTo?: Function;
	returnUc?: any;

	orderList: OrderList = new OrderList();

	constructor(pOrderListWindow: POrderListWindow, pOrderDetailsWindow: POrderDetailsWindow, iOrderList: IOrderList, iOrderDetails: IOrderDetails) {
		this.pOrderListWindow = pOrderListWindow;
		this.pOrderDetailsWindow = pOrderDetailsWindow;
		this.iOrderList = iOrderList;
		this.iOrderDetails = iOrderDetails;
	}

	selectShowOrderList(returnTo?: Function, returnUc?: any) {
		if (undefined != returnTo) { this.returnTo = returnTo; this.returnUc = returnUc; }
		let orderList = this.iOrderList.readOrderList();
		this.pOrderListWindow.showOrderListWindow(orderList);
	}

	selectShowOrder(orderList: OrderList) {
		this.orderList = orderList;
		let orderDetails = this.iOrderDetails.readOrderDetails(this.orderList);
		this.pOrderDetailsWindow.showOrderDetailsWindow(orderDetails);
	}

	selectClose() {
		let orderList = this.iOrderList.readOrderList();
		this.pOrderListWindow.showOrderListWindow(orderList);
	}

	invokedAtA1(this: any, result: ShowOrderListAtA1UnionEnum) {
		let orderList = this.iOrderList.readOrderList();
		this.pOrderListWindow.showOrderListWindow(orderList);
	}

	selectFindOrder(returnTo?: Function, returnUc?: any) {
		this.findOrder?.selectFindOrder(returnTo, this);
	}

	selectAddOrder(returnTo?: Function, returnUc?: any) {
		this.addOrder?.selectAddOrder(returnTo, this);
	}

	invokedAtB1(this: any, result: ShowOrderListAtB1UnionEnum) {
		let orderList = this.iOrderList.readOrderList();
		this.pOrderListWindow.showOrderListWindow(orderList);
	}

	selectClose1() {
		if (undefined != this.returnTo)
			this.returnTo.call(this.returnUc, ShowOrderListResultEnum.OK);
	}

	selectDeleteOrders(orderList: OrderList, returnTo?: Function, returnUc?: any) {
		this.orderList = orderList;
		this.deleteOrders?.selectDeleteOrders(this.orderList, returnTo, this);
	}

	selectEditOrder(order: Order, returnTo?: Function, returnUc?: any) {
		order = order;
		this.editOrder?.selectEditOrder(this.order, returnTo, this);
	}
}