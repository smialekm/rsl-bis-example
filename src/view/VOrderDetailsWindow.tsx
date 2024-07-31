import React from "react";
import { useReducer } from "react";
import { OrderDetailsWindowState } from "../viewmodel/ViewModel";
import { COrderDetailsWindow } from "./controllers/COrderDetailsWindow";
import { UCShowOrderList } from "../usecases/UCShowOrderList";
import { POrderDetailsWindow, updateOrderDetailsWindow } from "./presenters/POrderDetailsWindow";

export default function VOrderDetailsWindow(
	isActive: boolean,
	pOrderDetailsWindow: POrderDetailsWindow,
	showOrderList: UCShowOrderList
) {
	const emptyState: OrderDetailsWindowState = new OrderDetailsWindowState();
	const [viewState, updateView] = useReducer(updateOrderDetailsWindow, emptyState);

	pOrderDetailsWindow.injectStateHandle(viewState, updateView);

	if (!isActive) return;

	const [selectClose] = COrderDetailsWindow(viewState, showOrderList);
	return (
		<div className="OrderDetailsWindow">
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
				onClick={selectClose}
			>
				Close
			</button>
		</div>
	);
}