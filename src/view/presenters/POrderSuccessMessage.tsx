import { Dispatch } from "react";
import { PresentationDispatcher } from "./PresentationDispatcher";
import { OrderSuccessMessageState, ScreenId } from "../../viewmodel/ViewModel";

export function updateOrderSuccessMessage(state: OrderSuccessMessageState, action: string) {
	let newState = { ...state };
	return newState;
}

export class POrderSuccessMessage extends PresentationDispatcher {
	state!: OrderSuccessMessageState;
	updateView!: Dispatch<string>;

	injectStateHandle(state: OrderSuccessMessageState, updateView: Dispatch<string>) {
		this.state = state;
		this.updateView = updateView;
	}

	showOrderSuccessMessage(){
		this.gUpdateView?.(ScreenId.ORDERSUCCESSMESSAGE);
	}
}