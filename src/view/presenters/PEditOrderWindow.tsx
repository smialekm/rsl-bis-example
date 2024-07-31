import { Dispatch } from "react";
import { PresentationDispatcher } from "./PresentationDispatcher";
import { EditOrderWindowState, ScreenId, OrderDetails } from "../../viewmodel/ViewModel";

export function updateEditOrderWindow(state: EditOrderWindowState, action: string) {
	let newState = { ...state };
	return newState;
}

export class PEditOrderWindow extends PresentationDispatcher {
	state!: EditOrderWindowState;
	updateView!: Dispatch<string>;

	injectStateHandle(state: EditOrderWindowState, updateView: Dispatch<string>) {
		this.state = state;
		this.updateView = updateView;
	}

	showEditOrderWindow(orderDetails: OrderDetails){
		this.state.orderDetails = orderDetails;
		this.gUpdateView?.(ScreenId.EDITORDERWINDOW);
	}
}