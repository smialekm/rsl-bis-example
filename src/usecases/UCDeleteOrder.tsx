import { OrderList, DeleteOrderResultEnum } from "../viewmodel/ViewModel";
import { PDeleteConfirmationMessage } from "../view/presenters/PDeleteConfirmationMessage";
import { IOrder } from "../services/IOrder";

export class UCDeleteOrder{
	pDeleteConfirmationMessage: PDeleteConfirmationMessage;

	iOrder: IOrder;

	returnTo?: Function;
	returnUc?: any;

	orderList: OrderList = new OrderList();

	constructor(pDeleteConfirmationMessage: PDeleteConfirmationMessage, iOrder: IOrder) {
		this.pDeleteConfirmationMessage = pDeleteConfirmationMessage;
		this.iOrder = iOrder;
	}

	selectDeleteOrder(orderList: OrderList, returnTo?: Function, returnUc?: any) {
		if (undefined != returnTo) { this.returnTo = returnTo; this.returnUc = returnUc; }
		this.orderList = orderList;
		this.pDeleteConfirmationMessage.showDeleteConfirmationMessage();
	}

	selectDelete() {
		this.iOrder.deleteOrder(order, this.orderList);
		if (undefined != this.returnTo)
			this.returnTo.call(this.returnUc, DeleteOrderResultEnum.OK);
	}
}