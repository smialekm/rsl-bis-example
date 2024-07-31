import { OrderSearch, OrderSearchEnum, FindOrderResultEnum } from "../viewmodel/ViewModel";
import { POrderSearchForm } from "../view/presenters/POrderSearchForm";
import { POrderWindow } from "../view/presenters/POrderWindow";
import { PSearchErrorMessage } from "../view/presenters/PSearchErrorMessage";
import { IOrderSearch } from "../services/IOrderSearch";
import { IOrder } from "../services/IOrder";

export class UCFindOrder{
	pOrderSearchForm: POrderSearchForm;
	pOrderWindow: POrderWindow;
	pSearchErrorMessage: PSearchErrorMessage;

	iOrderSearch: IOrderSearch;
	iOrder: IOrder;

	returnTo?: Function;
	returnUc?: any;

	orderSearch: OrderSearch = new OrderSearch();

	constructor(pOrderSearchForm: POrderSearchForm, pOrderWindow: POrderWindow, pSearchErrorMessage: PSearchErrorMessage, iOrderSearch: IOrderSearch, iOrder: IOrder) {
		this.pOrderSearchForm = pOrderSearchForm;
		this.pOrderWindow = pOrderWindow;
		this.pSearchErrorMessage = pSearchErrorMessage;
		this.iOrderSearch = iOrderSearch;
		this.iOrder = iOrder;
	}

	selectFindOrder(returnTo?: Function, returnUc?: any) {
		if (undefined != returnTo) { this.returnTo = returnTo; this.returnUc = returnUc; }
		this.pOrderSearchForm.showOrderSearchForm();
	}

	selectSearch(orderSearch: OrderSearch) {
		this.orderSearch = orderSearch;
		let orderSearchEnum = this.iOrderSearch.checkOrderSearch(this.orderSearch);
		if (OrderSearchEnum.VALID == orderSearchEnum) {
			let order = this.iOrder.readOrder(this.orderSearch);
			this.pOrderWindow.showOrderWindow(order);
		} else if (OrderSearchEnum.INVALID == orderSearchEnum) {
			this.pSearchErrorMessage.showSearchErrorMessage();
		}
	}

	selectClose() {
		if (undefined != this.returnTo)
			this.returnTo.call(this.returnUc, FindOrderResultEnum.OK);
	}

	selectCancel() {
		if (undefined != this.returnTo)
			this.returnTo.call(this.returnUc, FindOrderResultEnum.CANCEL);
	}

	selectClose1() {
		if (undefined != this.returnTo)
			this.returnTo.call(this.returnUc, FindOrderResultEnum.NOTOK);
	}

	selectRepeat() {
		this.pOrderSearchForm.showOrderSearchForm();
	}
}