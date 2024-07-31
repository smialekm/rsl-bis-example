import { OrderDetails, Order, EditOrderResultEnum } from "../viewmodel/ViewModel";
import { PEditOrderWindow } from "../view/presenters/PEditOrderWindow";
import { IOrderDetails } from "../services/IOrderDetails";

export class UCEditOrder{
	pEditOrderWindow: PEditOrderWindow;

	iOrderDetails: IOrderDetails;

	returnTo?: Function;
	returnUc?: any;

	order: Order = new Order();
	orderDetails: OrderDetails = new OrderDetails();

	constructor(pEditOrderWindow: PEditOrderWindow, iOrderDetails: IOrderDetails) {
		this.pEditOrderWindow = pEditOrderWindow;
		this.iOrderDetails = iOrderDetails;
	}

	selectEditOrder(order: Order, returnTo?: Function, returnUc?: any) {
		if (undefined != returnTo) { this.returnTo = returnTo; this.returnUc = returnUc; }
		this.order = order;
		let orderDetails = this.iOrderDetails.readOrderDetails(this.orderList);
		this.pEditOrderWindow.showEditOrderWindow(orderDetails);
	}

	selectSave(orderDetails: OrderDetails) {
		this.orderDetails = orderDetails;
		this.iOrderDetails.updateOrderDetails(this.orderDetails, this.order);
		if (undefined != this.returnTo)
			this.returnTo.call(this.returnUc, EditOrderResultEnum.OK);
	}
}