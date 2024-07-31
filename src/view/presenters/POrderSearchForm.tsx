import { Dispatch } from "react";
import { PresentationDispatcher } from "./PresentationDispatcher";
import { OrderSearchFormState, ScreenId } from "../../viewmodel/ViewModel";

export function updateOrderSearchForm(state: OrderSearchFormState, action: string) {
	let newState = { ...state };
	return newState;
}

export class POrderSearchForm extends PresentationDispatcher {
	state!: OrderSearchFormState;
	updateView!: Dispatch<string>;

	injectStateHandle(state: OrderSearchFormState, updateView: Dispatch<string>) {
		this.state = state;
		this.updateView = updateView;
	}

	showOrderSearchForm(){
		this.gUpdateView?.(ScreenId.ORDERSEARCHFORM);
	}
}