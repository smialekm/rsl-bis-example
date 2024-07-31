import React from "react";
import { useReducer } from "react";
import { OrderListWindowState } from "../viewmodel/ViewModel";
import { COrderListWindow } from "./controllers/COrderListWindow";
import { UCShowOrderList } from "../usecases/UCShowOrderList";
import { POrderListWindow, updateOrderListWindow } from "./presenters/POrderListWindow";

export default function VOrderListWindow(
	isActive: boolean,
	pOrderListWindow: POrderListWindow,
	showOrderList: UCShowOrderList
) {
	const emptyState: OrderListWindowState = new OrderListWindowState();
	const [viewState, updateView] = useReducer(updateOrderListWindow, emptyState);

	pOrderListWindow.injectStateHandle(viewState, updateView);

	if (!isActive) return;

	const [selectShowOrder, selectFindOrder, selectAddOrder, selectClose, selectDeleteOrders, selectEditOrder] = COrderListWindow(viewState, showOrderList);
	return (
		<div className="OrderListWindow">
			<h2>List of orders</h2>
			<h3>order list</h3>
				<table className="table table-striped table-bordered">
					<thead>
						<tr>
							<th></th>
							<th>number</th>
							<th>title</th>
							<th>dates</th>
						</tr>
					</thead>
					<tbody>
						{viewState.baseOrderList.orders &&
						 viewState.baseOrderList.orders.map((value,index) => (
							<tr key={index}>
								<td>
									<input
										type="checkbox"
										id={index.toString()}
										onChange={(e) => {
											e.target.checked
												? viewState.orderList.orders.push(
														viewState.baseOrderList.orders[index]
													)
												: viewState.orderList.orders.splice(
														viewState.orderList.orders.indexOf(
															viewState.baseOrderList.orders[index]
														), 1
													);
											viewState.order =
												1 == viewState.orderList.orders.length
													? viewState.baseOrderList.orders[0]
													: undefined;
										}}
									/>
								</td>
								<td>{value.number.toString()}</td>
								<td>{value.title}</td>
								<td>{value.dates}</td>
							</tr>
						))}
					</tbody>
				</table>
				<label>name</label>
				<input
					type="text"
					value={viewState.orderList.name}
					onChange={(e) => {
						viewState.orderList.name = e.target.value;
						updateView("orderList_name")
					}}
				/> <br />

			<button
				onClick={selectShowOrder}
			>
				Show Order
			</button>
			<button
				onClick={selectFindOrder}
			>
				Find Order
			</button>
			<button
				onClick={selectAddOrder}
			>
				Add Order
			</button>
			<button
				onClick={selectClose}
			>
				Close
			</button>
			<button
				onClick={selectDeleteOrders}
			>
				Delete Orders
			</button>
			<button
				onClick={selectEditOrder}
			>
				Edit Order
			</button>
		</div>
	);
}