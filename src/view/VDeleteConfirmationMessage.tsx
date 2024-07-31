import React from "react";
import { useReducer } from "react";
import { DeleteConfirmationMessageState } from "../viewmodel/ViewModel";
import { CDeleteConfirmationMessage } from "./controllers/CDeleteConfirmationMessage";
import { UCDeleteOrders } from "../usecases/UCDeleteOrders";
import { PDeleteConfirmationMessage, updateDeleteConfirmationMessage } from "./presenters/PDeleteConfirmationMessage";

export default function VDeleteConfirmationMessage(
	isActive: boolean,
	pDeleteConfirmationMessage: PDeleteConfirmationMessage,
	deleteOrders: UCDeleteOrders
) {
	const emptyState: DeleteConfirmationMessageState = new DeleteConfirmationMessageState();
	const [viewState, updateView] = useReducer(updateDeleteConfirmationMessage, emptyState);

	pDeleteConfirmationMessage.injectStateHandle(viewState, updateView);

	if (!isActive) return;

	const [selectDelete] = CDeleteConfirmationMessage(viewState, deleteOrders);
	return (
		<div className="DeleteConfirmationMessage">
			<h2>Are you sure</h2>
			<button
				onClick={selectDelete}
			>
				Delete
			</button>
		</div>
	);
}