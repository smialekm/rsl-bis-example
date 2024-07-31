import { Dispatch } from "react";
import { PresentationDispatcher } from "./PresentationDispatcher";
import { SearchErrorMessageState, ScreenId } from "../../viewmodel/ViewModel";

export function updateSearchErrorMessage(state: SearchErrorMessageState, action: string) {
	let newState = { ...state };
	return newState;
}

export class PSearchErrorMessage extends PresentationDispatcher {
	state!: SearchErrorMessageState;
	updateView!: Dispatch<string>;

	injectStateHandle(state: SearchErrorMessageState, updateView: Dispatch<string>) {
		this.state = state;
		this.updateView = updateView;
	}

	showSearchErrorMessage(){
		this.gUpdateView?.(ScreenId.SEARCHERRORMESSAGE);
	}
}