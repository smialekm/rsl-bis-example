import React from "react";
import { useReducer } from "react";
import { EditOrderWindowState } from "../viewmodel/ViewModel";
import { CEditOrderWindow } from "./controllers/CEditOrderWindow";
import { UCEditOrder } from "../usecases/UCEditOrder";
import { PEditOrderWindow, updateEditOrderWindow } from "./presenters/PEditOrderWindow";

export default function VEditOrderWindow(
	isActive: boolean,
	pEditOrderWindow: PEditOrderWindow,
	editOrder: UCEditOrder
) {
	const emptyState: EditOrderWindowState = new EditOrderWindowState();
	const [viewState, updateView] = useReducer(updateEditOrderWindow, emptyState);

	pEditOrderWindow.injectStateHandle(viewState, updateView);

	if (!isActive) return;

	const [selectSave] = CEditOrderWindow(viewState, editOrder);
	return (
		<div className="EditOrderWindow">
			<h3>order details</h3>
				<label>number</label>
				<input
					type="text"
					value={viewState.orderDetails.number.toString()}
					onChange={(e) => {
						viewState.orderDetails.number = BigInt(e.target.value);
						updateView("orderDetails_number")
					}}
				/> <br />
				<label>title</label>
				<input
					type="text"
					value={viewState.orderDetails.title}
					onChange={(e) => {
						viewState.orderDetails.title = e.target.value;
						updateView("orderDetails_title")
					}}
				/> <br />
				<label>dates</label>
				<input
					type="text"
					value={viewState.orderDetails.dates}
					onChange={(e) => {
						viewState.orderDetails.dates = e.target.value;
						updateView("orderDetails_dates")
					}}
				/> <br />
				<label>description</label>
				<input
					type="text"
					value={viewState.orderDetails.description}
					onChange={(e) => {
						viewState.orderDetails.description = e.target.value;
						updateView("orderDetails_description")
					}}
				/> <br />

			<button
				onClick={selectSave}
			>
				Save
			</button>
		</div>
	);
}