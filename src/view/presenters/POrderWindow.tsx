import { Dispatch } from "react";
import { PresentationDispatcher } from "./PresentationDispatcher";
import { OrderWindowState, ScreenId, Order } from "../../viewmodel/ViewModel";

export function updateOrderWindow(state: OrderWindowState, action: string) {
	let newState = { ...state };
	return newState;
}

export class POrderWindow extends PresentationDispatcher {
	state!: OrderWindowState;
	updateView!: Dispatch<string>;

	injectStateHandle(state: OrderWindowState, updateView: Dispatch<string>) {
		this.state = state;
		this.updateView = updateView;
	}

	showOrderWindow(order: Order){
		this.state.order = order;
		this.gUpdateView?.(ScreenId.ORDERWINDOW);
	}
}