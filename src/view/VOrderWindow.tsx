import React from "react";
import { useReducer } from "react";
import { OrderWindowState } from "../viewmodel/ViewModel";
import { COrderWindow } from "./controllers/COrderWindow";
import { UCFindOrder } from "../usecases/UCFindOrder";
import { POrderWindow, updateOrderWindow } from "./presenters/POrderWindow";

export default function VOrderWindow(
	isActive: boolean,
	pOrderWindow: POrderWindow,
	findOrder: UCFindOrder
) {
	const emptyState: OrderWindowState = new OrderWindowState();
	const [viewState, updateView] = useReducer(updateOrderWindow, emptyState);

	pOrderWindow.injectStateHandle(viewState, updateView);

	if (!isActive) return;

	const [selectClose] = COrderWindow(viewState, findOrder);
	return (
		<div className="OrderWindow">
			<h2>Order data</h2>
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
				onClick={selectClose}
			>
				Close
			</button>
		</div>
	);
}