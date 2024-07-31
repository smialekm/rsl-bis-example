import { Dispatch } from "react";
import { PresentationDispatcher } from "./PresentationDispatcher";
import { OrderErrorMessageState, ScreenId } from "../../viewmodel/ViewModel";

export function updateOrderErrorMessage(state: OrderErrorMessageState, action: string) {
	let newState = { ...state };
	return newState;
}

export class POrderErrorMessage extends PresentationDispatcher {
	state!: OrderErrorMessageState;
	updateView!: Dispatch<string>;

	injectStateHandle(state: OrderErrorMessageState, updateView: Dispatch<string>) {
		this.state = state;
		this.updateView = updateView;
	}

	showOrderErrorMessage(){
		this.gUpdateView?.(ScreenId.ORDERERRORMESSAGE);
	}
}