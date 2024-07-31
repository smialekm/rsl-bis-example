import React from "react";
import { useReducer } from "react";
import { OrderSuccessMessageState } from "../viewmodel/ViewModel";
import { COrderSuccessMessage } from "./controllers/COrderSuccessMessage";
import { UCAddOrder } from "../usecases/UCAddOrder";
import { POrderSuccessMessage, updateOrderSuccessMessage } from "./presenters/POrderSuccessMessage";

export default function VOrderSuccessMessage(
	isActive: boolean,
	pOrderSuccessMessage: POrderSuccessMessage,
	addOrder: UCAddOrder
) {
	const emptyState: OrderSuccessMessageState = new OrderSuccessMessageState();
	const [viewState, updateView] = useReducer(updateOrderSuccessMessage, emptyState);

	pOrderSuccessMessage.injectStateHandle(viewState, updateView);

	if (!isActive) return;

	const [selectOk] = COrderSuccessMessage(viewState, addOrder);
	return (
		<div className="OrderSuccessMessage">
			<h2>Order added successfully</h2>
			<button
				onClick={selectOk}
			>
				Ok
			</button>
		</div>
	);
}