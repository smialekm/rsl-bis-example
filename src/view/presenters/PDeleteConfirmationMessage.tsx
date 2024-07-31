import { Dispatch } from "react";
import { PresentationDispatcher } from "./PresentationDispatcher";
import { DeleteConfirmationMessageState, ScreenId } from "../../viewmodel/ViewModel";

export function updateDeleteConfirmationMessage(state: DeleteConfirmationMessageState, action: string) {
	let newState = { ...state };
	return newState;
}

export class PDeleteConfirmationMessage extends PresentationDispatcher {
	state!: DeleteConfirmationMessageState;
	updateView!: Dispatch<string>;

	injectStateHandle(state: DeleteConfirmationMessageState, updateView: Dispatch<string>) {
		this.state = state;
		this.updateView = updateView;
	}

	showDeleteConfirmationMessage(){
		this.gUpdateView?.(ScreenId.DELETECONFIRMATIONMESSAGE);
	}
}