import React from "react";
import { useReducer } from "react";
import { AppState, ScreenId } from "./viewmodel/ViewModel";
import VMainMenu from "./view/VMainMenu";
import VOrderSearchForm from "./view/VOrderSearchForm";
import VOrderWindow from "./view/VOrderWindow";
import VSearchErrorMessage from "./view/VSearchErrorMessage";
import VAddOrderForm from "./view/VAddOrderForm";
import VOrderSuccessMessage from "./view/VOrderSuccessMessage";
import VOrderErrorMessage from "./view/VOrderErrorMessage";
import VOrderListWindow from "./view/VOrderListWindow";
import VOrderDetailsWindow from "./view/VOrderDetailsWindow";
import VDeleteConfirmationMessage from "./view/VDeleteConfirmationMessage";
import VEditOrderWindow from "./view/VEditOrderWindow";
import { PMainMenu } from "./view/presenters/PMainMenu";
import { POrderSearchForm } from "./view/presenters/POrderSearchForm";
import { POrderWindow } from "./view/presenters/POrderWindow";
import { PSearchErrorMessage } from "./view/presenters/PSearchErrorMessage";
import { PAddOrderForm } from "./view/presenters/PAddOrderForm";
import { POrderSuccessMessage } from "./view/presenters/POrderSuccessMessage";
import { POrderErrorMessage } from "./view/presenters/POrderErrorMessage";
import { POrderListWindow } from "./view/presenters/POrderListWindow";
import { POrderDetailsWindow } from "./view/presenters/POrderDetailsWindow";
import { PDeleteConfirmationMessage } from "./view/presenters/PDeleteConfirmationMessage";
import { PEditOrderWindow } from "./view/presenters/PEditOrderWindow";
import { UCStart } from "./usecases/UCStart";
import { UCFindOrder } from "./usecases/UCFindOrder";
import { UCAddOrder } from "./usecases/UCAddOrder";
import { UCShowOrderList } from "./usecases/UCShowOrderList";
import { UCDeleteOrders } from "./usecases/UCDeleteOrders";
import { UCEditOrder } from "./usecases/UCEditOrder";
import { IOrderSearch, OrderSearchProxy } from "./services/IOrderSearch";
import { IOrder, OrderProxy } from "./services/IOrder";
import { IOrderList, OrderListProxy } from "./services/IOrderList";
import { IOrderDetails, OrderDetailsProxy } from "./services/IOrderDetails";

const pMainMenu: PMainMenu = new PMainMenu();
const pOrderSearchForm: POrderSearchForm = new POrderSearchForm();
const pOrderWindow: POrderWindow = new POrderWindow();
const pSearchErrorMessage: PSearchErrorMessage = new PSearchErrorMessage();
const pAddOrderForm: PAddOrderForm = new PAddOrderForm();
const pOrderSuccessMessage: POrderSuccessMessage = new POrderSuccessMessage();
const pOrderErrorMessage: POrderErrorMessage = new POrderErrorMessage();
const pOrderListWindow: POrderListWindow = new POrderListWindow();
const pOrderDetailsWindow: POrderDetailsWindow = new POrderDetailsWindow();
const pDeleteConfirmationMessage: PDeleteConfirmationMessage = new PDeleteConfirmationMessage();
const pEditOrderWindow: PEditOrderWindow = new PEditOrderWindow();

const iOrderSearch: IOrderSearch = new OrderSearchProxy();
const iOrder: IOrder = new OrderProxy();
const iOrderList: IOrderList = new OrderListProxy();
const iOrderDetails: IOrderDetails = new OrderDetailsProxy();

const start: UCStart = new UCStart(pMainMenu);
const findOrder: UCFindOrder = new UCFindOrder(pOrderSearchForm, pOrderWindow, pSearchErrorMessage, iOrderSearch, iOrder);
const addOrder: UCAddOrder = new UCAddOrder(pAddOrderForm, pOrderSuccessMessage, pOrderErrorMessage, iOrder);
const showOrderList: UCShowOrderList = new UCShowOrderList(pOrderListWindow, pOrderDetailsWindow, iOrderList, iOrderDetails);
const deleteOrders: UCDeleteOrders = new UCDeleteOrders(pDeleteConfirmationMessage, iOrderList);
const editOrder: UCEditOrder = new UCEditOrder(pEditOrderWindow, iOrderDetails);
start.findOrder = findOrder;
start.addOrder = addOrder;
start.showOrderList = showOrderList;
showOrderList.findOrder = findOrder;
showOrderList.addOrder = addOrder;
showOrderList.deleteOrders = deleteOrders;
showOrderList.editOrder = editOrder;

function switchView(state: AppState, action: ScreenId) {
	let newState = { ...state };
	switch (action) {
		case ScreenId.START:
			newState.screen = ScreenId.START;
			break;
		case ScreenId.MAINMENU:
			newState.screen = ScreenId.MAINMENU;
			break;
		case ScreenId.ORDERSEARCHFORM:
			newState.screen = ScreenId.ORDERSEARCHFORM;
			break;
		case ScreenId.ORDERWINDOW:
			newState.screen = ScreenId.ORDERWINDOW;
			break;
		case ScreenId.SEARCHERRORMESSAGE:
			newState.screen = ScreenId.SEARCHERRORMESSAGE;
			break;
		case ScreenId.ADDORDERFORM:
			newState.screen = ScreenId.ADDORDERFORM;
			break;
		case ScreenId.ORDERSUCCESSMESSAGE:
			newState.screen = ScreenId.ORDERSUCCESSMESSAGE;
			break;
		case ScreenId.ORDERERRORMESSAGE:
			newState.screen = ScreenId.ORDERERRORMESSAGE;
			break;
		case ScreenId.ORDERLISTWINDOW:
			newState.screen = ScreenId.ORDERLISTWINDOW;
			break;
		case ScreenId.ORDERDETAILSWINDOW:
			newState.screen = ScreenId.ORDERDETAILSWINDOW;
			break;
		case ScreenId.DELETECONFIRMATIONMESSAGE:
			newState.screen = ScreenId.DELETECONFIRMATIONMESSAGE;
			break;
		case ScreenId.EDITORDERWINDOW:
			newState.screen = ScreenId.EDITORDERWINDOW;
			break;
	}
	return newState;
}
export default function App() {
	const [state, globalUpdateView] = useReducer(switchView, {
		screen: ScreenId.START,
	});

	pMainMenu.injectGlobalUpdateView(globalUpdateView);
	pOrderSearchForm.injectGlobalUpdateView(globalUpdateView);
	pOrderWindow.injectGlobalUpdateView(globalUpdateView);
	pSearchErrorMessage.injectGlobalUpdateView(globalUpdateView);
	pAddOrderForm.injectGlobalUpdateView(globalUpdateView);
	pOrderSuccessMessage.injectGlobalUpdateView(globalUpdateView);
	pOrderErrorMessage.injectGlobalUpdateView(globalUpdateView);
	pOrderListWindow.injectGlobalUpdateView(globalUpdateView);
	pOrderDetailsWindow.injectGlobalUpdateView(globalUpdateView);
	pDeleteConfirmationMessage.injectGlobalUpdateView(globalUpdateView);
	pEditOrderWindow.injectGlobalUpdateView(globalUpdateView);

	if (state.screen === ScreenId.START) start.selectApplication();

	return (
		<div className="App">
			{VMainMenu(state.screen === ScreenId.MAINMENU, pMainMenu, start)}
			{VOrderSearchForm(state.screen === ScreenId.ORDERSEARCHFORM, pOrderSearchForm, findOrder)}
			{VOrderWindow(state.screen === ScreenId.ORDERWINDOW, pOrderWindow, findOrder)}
			{VSearchErrorMessage(state.screen === ScreenId.SEARCHERRORMESSAGE, pSearchErrorMessage, findOrder)}
			{VAddOrderForm(state.screen === ScreenId.ADDORDERFORM, pAddOrderForm, addOrder)}
			{VOrderSuccessMessage(state.screen === ScreenId.ORDERSUCCESSMESSAGE, pOrderSuccessMessage, addOrder)}
			{VOrderErrorMessage(state.screen === ScreenId.ORDERERRORMESSAGE, pOrderErrorMessage, addOrder)}
			{VOrderListWindow(state.screen === ScreenId.ORDERLISTWINDOW, pOrderListWindow, showOrderList)}
			{VOrderDetailsWindow(state.screen === ScreenId.ORDERDETAILSWINDOW, pOrderDetailsWindow, showOrderList)}
			{VDeleteConfirmationMessage(state.screen === ScreenId.DELETECONFIRMATIONMESSAGE, pDeleteConfirmationMessage, deleteOrders)}
			{VEditOrderWindow(state.screen === ScreenId.EDITORDERWINDOW, pEditOrderWindow, editOrder)}
		</div>
	);
}
