import React from "react";
import { useReducer } from "react";
import { OrderErrorMessageState } from "../viewmodel/ViewModel";
import { COrderErrorMessage } from "./controllers/COrderErrorMessage";
import { UCAddOrder } from "../usecases/UCAddOrder";
import { POrderErrorMessage, updateOrderErrorMessage } from "./presenters/POrderErrorMessage";

export default function VOrderErrorMessage(
	isActive: boolean,
	pOrderErrorMessage: POrderErrorMessage,
	addOrder: UCAddOrder
) {
	const emptyState: OrderErrorMessageState = new OrderErrorMessageState();
	const [viewState, updateView] = useReducer(updateOrderErrorMessage, emptyState);

	pOrderErrorMessage.injectStateHandle(viewState, updateView);

	if (!isActive) return;

	const [selectOk] = COrderErrorMessage(viewState, addOrder);
	return (
		<div className="OrderErrorMessage">
			<h2>Order not added</h2>
			<button
				onClick={selectOk}
			>
				Ok
			</button>
		</div>
	);
}