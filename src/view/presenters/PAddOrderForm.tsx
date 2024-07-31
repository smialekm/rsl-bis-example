import { Dispatch } from "react";
import { PresentationDispatcher } from "./PresentationDispatcher";
import { AddOrderFormState, ScreenId } from "../../viewmodel/ViewModel";

export function updateAddOrderForm(state: AddOrderFormState, action: string) {
	let newState = { ...state };
	return newState;
}

export class PAddOrderForm extends PresentationDispatcher {
	state!: AddOrderFormState;
	updateView!: Dispatch<string>;

	injectStateHandle(state: AddOrderFormState, updateView: Dispatch<string>) {
		this.state = state;
		this.updateView = updateView;
	}

	showAddOrderForm(){
		this.gUpdateView?.(ScreenId.ADDORDERFORM);
	}
}