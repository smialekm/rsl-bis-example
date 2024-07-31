import { MainMenuState } from "../../viewmodel/ViewModel";
import { UCStart } from "../../usecases/UCStart";

export function CMainMenu(
	state: MainMenuState,
	start: UCStart
) {
	function selectFindOrder() {
		start.selectFindOrder(start.invokedAt02);
	}

	function selectAddOrder() {
		start.selectAddOrder(start.invokedAt02);
	}

	function selectShowOrderList() {
		start.selectShowOrderList(start.invokedAt02);
	}

	return [selectFindOrder, selectAddOrder, selectShowOrderList];
}