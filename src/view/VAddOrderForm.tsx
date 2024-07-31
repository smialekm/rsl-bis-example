import React from "react";
import { useReducer } from "react";
import { AddOrderFormState } from "../viewmodel/ViewModel";
import { CAddOrderForm } from "./controllers/CAddOrderForm";
import { UCAddOrder } from "../usecases/UCAddOrder";
import { PAddOrderForm, updateAddOrderForm } from "./presenters/PAddOrderForm";

export default function VAddOrderForm(
	isActive: boolean,
	pAddOrderForm: PAddOrderForm,
	addOrder: UCAddOrder
) {
	const emptyState: AddOrderFormState = new AddOrderFormState();
	const [viewState, updateView] = useReducer(updateAddOrderForm, emptyState);

	pAddOrderForm.injectStateHandle(viewState, updateView);

	if (!isActive) return;

	const [selectAdd, selectCancel] = CAddOrderForm(viewState, addOrder);
	return (
		<div className="AddOrderForm">
			<h2>Add new order</h2>
			<h3>order</h3>
				<label>number</label>
				<input
					type="text"
					value={viewState.order.number.toString()}
					onChange={(e) => {
						viewState.order.number = BigInt(e.target.value);
						updateView("order_number")
					}}
				/> <br />
				<label>title</label>
				<input
					type="text"
					value={viewState.order.title}
					onChange={(e) => {
						viewState.order.title = e.target.value;
						updateView("order_title")
					}}
				/> <br />
				<label>dates</label>
				<input
					type="text"
					value={viewState.order.dates}
					onChange={(e) => {
						viewState.order.dates = e.target.value;
						updateView("order_dates")
					}}
				/> <br />

			<button
				onClick={selectAdd}
			>
				Add
			</button>
			<button
				onClick={selectCancel}
			>
				Cancel
			</button>
		</div>
	);
}