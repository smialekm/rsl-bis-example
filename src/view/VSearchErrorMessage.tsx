import React from "react";
import { useReducer } from "react";
import { SearchErrorMessageState } from "../viewmodel/ViewModel";
import { CSearchErrorMessage } from "./controllers/CSearchErrorMessage";
import { UCFindOrder } from "../usecases/UCFindOrder";
import { PSearchErrorMessage, updateSearchErrorMessage } from "./presenters/PSearchErrorMessage";

export default function VSearchErrorMessage(
	isActive: boolean,
	pSearchErrorMessage: PSearchErrorMessage,
	findOrder: UCFindOrder
) {
	const emptyState: SearchErrorMessageState = new SearchErrorMessageState();
	const [viewState, updateView] = useReducer(updateSearchErrorMessage, emptyState);

	pSearchErrorMessage.injectStateHandle(viewState, updateView);

	if (!isActive) return;

	const [selectClose, selectRepeat] = CSearchErrorMessage(viewState, findOrder);
	return (
		<div className="SearchErrorMessage">
			<h2>Order not found</h2>
			<button
				onClick={selectClose}
			>
				Close
			</button>
			<button
				onClick={selectRepeat}
			>
				Repeat
			</button>
		</div>
	);
}