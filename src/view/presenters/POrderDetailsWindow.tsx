import { Dispatch } from "react";
import { PresentationDispatcher } from "./PresentationDispatcher";
import { OrderDetailsWindowState, ScreenId, OrderDetails } from "../../viewmodel/ViewModel";

export function updateOrderDetailsWindow(state: OrderDetailsWindowState, action: string) {
	let newState = { ...state };
	return newState;
}

export class POrderDetailsWindow extends PresentationDispatcher {
	state!: OrderDetailsWindowState;
	updateView!: Dispatch<string>;

	injectStateHandle(state: OrderDetailsWindowState, updateView: Dispatch<string>) {
		this.state = state;
		this.updateView = updateView;
	}

	showOrderDetailsWindow(orderDetails: OrderDetails){
		this.state.orderDetails = orderDetails;
		this.gUpdateView?.(ScreenId.ORDERDETAILSWINDOW);
	}
}