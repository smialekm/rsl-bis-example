import { StartAt02UnionEnum } from "../viewmodel/ViewModel";
import { PMainMenu } from "../view/presenters/PMainMenu";
import { UCFindOrder } from "./UCFindOrder";
import { UCAddOrder } from "./UCAddOrder";
import { UCShowOrderList } from "./UCShowOrderList";

export class UCStart{
	pMainMenu: PMainMenu;

	findOrder: UCFindOrder | undefined;
	addOrder: UCAddOrder | undefined;
	showOrderList: UCShowOrderList | undefined;

	returnTo?: Function;
	returnUc?: any;

	constructor(pMainMenu: PMainMenu) {
		this.pMainMenu = pMainMenu;
	}

	selectApplication(returnTo?: Function, returnUc?: any) {
		if (undefined != returnTo) { this.returnTo = returnTo; this.returnUc = returnUc; }
		this.pMainMenu.showMainMenu();
	}

	invokedAt02(this: any, result: StartAt02UnionEnum) {
		this.pMainMenu.showMainMenu();
	}

	selectFindOrder(returnTo?: Function, returnUc?: any) {
		this.findOrder?.selectFindOrder(returnTo, this);
	}

	selectAddOrder(returnTo?: Function, returnUc?: any) {
		this.addOrder?.selectAddOrder(returnTo, this);
	}

	selectShowOrderList(returnTo?: Function, returnUc?: any) {
		this.showOrderList?.selectShowOrderList(returnTo, this);
	}
}