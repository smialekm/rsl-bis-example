import { OrderList, DeleteOrdersResultEnum } from "../viewmodel/ViewModel";
import { PDeleteConfirmationMessage } from "../view/presenters/PDeleteConfirmationMessage";
import { IOrderList } from "../services/IOrderList";

export class UCDeleteOrders{
	pDeleteConfirmationMessage: PDeleteConfirmationMessage;

	iOrderList: IOrderList;

	returnTo?: Function;
	returnUc?: any;

	orderList: OrderList = new OrderList();

	constructor(pDeleteConfirmationMessage: PDeleteConfirmationMessage, iOrderList: IOrderList) {
		this.pDeleteConfirmationMessage = pDeleteConfirmationMessage;
		this.iOrderList = iOrderList;
	}

	selectDeleteOrders(orderList: OrderList, returnTo?: Function, returnUc?: any) {
		if (undefined != returnTo) { this.returnTo = returnTo; this.returnUc = returnUc; }
		this.orderList = orderList;
		this.pDeleteConfirmationMessage.showDeleteConfirmationMessage();
	}

	selectDelete() {
		this.iOrderList.deleteOrderList(this.orderList);
		if (undefined != this.returnTo)
			this.returnTo.call(this.returnUc, DeleteOrdersResultEnum.OK);
	}
}