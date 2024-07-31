import { Order, OrderEnum, AddOrderResultEnum } from "../viewmodel/ViewModel";
import { PAddOrderForm } from "../view/presenters/PAddOrderForm";
import { POrderSuccessMessage } from "../view/presenters/POrderSuccessMessage";
import { POrderErrorMessage } from "../view/presenters/POrderErrorMessage";
import { IOrder } from "../services/IOrder";

export class UCAddOrder{
	pAddOrderForm: PAddOrderForm;
	pOrderSuccessMessage: POrderSuccessMessage;
	pOrderErrorMessage: POrderErrorMessage;

	iOrder: IOrder;

	returnTo?: Function;
	returnUc?: any;

	order: Order = new Order();

	constructor(pAddOrderForm: PAddOrderForm, pOrderSuccessMessage: POrderSuccessMessage, pOrderErrorMessage: POrderErrorMessage, iOrder: IOrder) {
		this.pAddOrderForm = pAddOrderForm;
		this.pOrderSuccessMessage = pOrderSuccessMessage;
		this.pOrderErrorMessage = pOrderErrorMessage;
		this.iOrder = iOrder;
	}

	selectAddOrder(returnTo?: Function, returnUc?: any) {
		if (undefined != returnTo) { this.returnTo = returnTo; this.returnUc = returnUc; }
		this.pAddOrderForm.showAddOrderForm();
	}

	selectAdd(order: Order) {
		this.order = order;
		let orderEnum = this.iOrder.checkOrder(this.order);
		if (OrderEnum.OK == orderEnum) {
			this.iOrder.updateOrder(this.order);
			this.pOrderSuccessMessage.showOrderSuccessMessage();
		} else if (OrderEnum.NOTOK == orderEnum) {
			this.pOrderErrorMessage.showOrderErrorMessage();
		}
	}

	selectOk() {
		if (undefined != this.returnTo)
			this.returnTo.call(this.returnUc, AddOrderResultEnum.OK);
	}

	selectCancel() {
		if (undefined != this.returnTo)
			this.returnTo.call(this.returnUc, AddOrderResultEnum.CANCEL);
	}

	selectOk1() {
		if (undefined != this.returnTo)
			this.returnTo.call(this.returnUc, AddOrderResultEnum.NOTOK);
	}
}