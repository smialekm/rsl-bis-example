import { OrderListWindowState, OrderList, Order } from "../../viewmodel/ViewModel";
import { UCShowOrderList } from "../../usecases/UCShowOrderList";

export function COrderListWindow(
	state: OrderListWindowState,
	showOrderList: UCShowOrderList
) {
	function selectShowOrder() {
		let orderList: OrderList = Object.create(state.orderList);
		showOrderList.selectShowOrder(orderList);
	}

	function selectFindOrder() {
		showOrderList.selectFindOrder(showOrderList.invokedAtA1);
	}

	function selectAddOrder() {
		showOrderList.selectAddOrder(showOrderList.invokedAtA1);
	}

	function selectClose() {
		showOrderList.selectClose1();
	}

	function selectDeleteOrders() {
		let orderList: OrderList = Object.create(state.orderList);
		showOrderList.selectDeleteOrders(orderList, showOrderList.invokedAtB1);
	}

	function selectEditOrder() {
		let order: Order = Object.create(state.order);
		showOrderList.selectEditOrder(order, showOrderList.invokedAtB1);
	}

	return [selectShowOrder, selectFindOrder, selectAddOrder, selectClose, selectDeleteOrders, selectEditOrder];
}