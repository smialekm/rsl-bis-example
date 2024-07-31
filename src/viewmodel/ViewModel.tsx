export enum ScreenId {
	START = "START",
	MAINMENU = "MAINMENU",
	ORDERSEARCHFORM = "ORDERSEARCHFORM",
	ORDERWINDOW = "ORDERWINDOW",
	SEARCHERRORMESSAGE = "SEARCHERRORMESSAGE",
	ADDORDERFORM = "ADDORDERFORM",
	ORDERSUCCESSMESSAGE = "ORDERSUCCESSMESSAGE",
	ORDERERRORMESSAGE = "ORDERERRORMESSAGE",
	ORDERLISTWINDOW = "ORDERLISTWINDOW",
	ORDERDETAILSWINDOW = "ORDERDETAILSWINDOW",
	DELETECONFIRMATIONMESSAGE = "DELETECONFIRMATIONMESSAGE",
	EDITORDERWINDOW = "EDITORDERWINDOW"
}

export enum ShowOrderListResultEnum {
	OK = "OK"
}

export enum FindOrderResultEnum {
	OK = "OK",
	CANCEL = "CANCEL",
	NOTOK = "NOTOK"
}

export enum AddOrderResultEnum {
	OK = "OK",
	CANCEL = "CANCEL",
	NOTOK = "NOTOK"
}

export enum OrderSearchEnum {
	VALID = "VALID",
	INVALID = "INVALID"
}

export enum OrderEnum {
	OK = "OK",
	NOTOK = "NOTOK"
}

export enum EditOrderResultEnum {
	OK = "OK"
}

export enum DeleteOrdersResultEnum {
	OK = "OK"
}

export class AppState {
	screen: ScreenId = ScreenId.START;
}

export class MainMenuState {
}

export class OrderSearchFormState {
	orderSearch: OrderSearch = new OrderSearch();
}

export class OrderSearch {
	orderNumber: string = "";
	items: bigint = BigInt(0);
}

export class Order {
	number: bigint = BigInt(0);
	title: string = "";
	dates: string = "";
}

export class OrderWindowState {
	order: Order = new Order();
}

export class SearchErrorMessageState {
}

export class AddOrderFormState {
	order: Order = new Order();
}

export class OrderSuccessMessageState {
}

export class OrderErrorMessageState {
}

export class OrderList {
	orders: Order[] = [];
	name: string = "";
}

export class OrderListWindowState {
	orderList: OrderList = new OrderList();
	baseOrderList: OrderList = new OrderList();
	order?: Order = undefined;
}

export class OrderDetails {
	number: bigint = BigInt(0);
	title: string = "";
	dates: string = "";
	description: string = "";
}

export class OrderDetailsWindowState {
	orderDetails: OrderDetails = new OrderDetails();
}

export class DeleteConfirmationMessageState {
}

export class EditOrderWindowState {
	orderDetails: OrderDetails = new OrderDetails();
}

export type StartAt02UnionEnum = 
	ShowOrderListResultEnum
	| FindOrderResultEnum
	| AddOrderResultEnum
	;

export type ShowOrderListAtA1UnionEnum = 
	FindOrderResultEnum
	| AddOrderResultEnum
	;

export type ShowOrderListAtB1UnionEnum = 
	EditOrderResultEnum
	| DeleteOrdersResultEnum
	;

