import { OrderDetailsWindowState } from "../../viewmodel/ViewModel";
import { UCShowOrderList } from "../../usecases/UCShowOrderList";

export function COrderDetailsWindow(
	state: OrderDetailsWindowState,
	showOrderList: UCShowOrderList
) {
	function selectClose() {
		showOrderList.selectClose();
	}

	return [selectClose];
}