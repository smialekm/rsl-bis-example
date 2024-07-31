import React from "react";
import { useReducer } from "react";
import { OrderSearchFormState } from "../viewmodel/ViewModel";
import { COrderSearchForm } from "./controllers/COrderSearchForm";
import { UCFindOrder } from "../usecases/UCFindOrder";
import { POrderSearchForm, updateOrderSearchForm } from "./presenters/POrderSearchForm";

export default function VOrderSearchForm(
	isActive: boolean,
	pOrderSearchForm: POrderSearchForm,
	findOrder: UCFindOrder
) {
	const emptyState: OrderSearchFormState = new OrderSearchFormState();
	const [viewState, updateView] = useReducer(updateOrderSearchForm, emptyState);

	pOrderSearchForm.injectStateHandle(viewState, updateView);

	if (!isActive) return;

	const [selectSearch, selectCancel] = COrderSearchForm(viewState, findOrder);
	return (
		<div className="OrderSearchForm">
			<h2>Search for orders</h2>
			<h3>order search</h3>
				<label>order number</label>
				<input
					type="text"
					value={viewState.orderSearch.orderNumber}
					onChange={(e) => {
						viewState.orderSearch.orderNumber = e.target.value;
						updateView("orderSearch_order number")
					}}
				/> <br />
				<label>items</label>
				<input
					type="text"
					value={viewState.orderSearch.items.toString()}
					onChange={(e) => {
						viewState.orderSearch.items = BigInt(e.target.value);
						updateView("orderSearch_items")
					}}
				/> <br />

			<button
				onClick={selectSearch}
			>
				Search
			</button>
			<button
				onClick={selectCancel}
			>
				Cancel
			</button>
		</div>
	);
}