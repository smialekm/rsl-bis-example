import { OrderWindowState } from "../../viewmodel/ViewModel";
import { UCFindOrder } from "../../usecases/UCFindOrder";

export function COrderWindow(
	state: OrderWindowState,
	findOrder: UCFindOrder
) {
	function selectClose() {
		findOrder.selectClose();
	}

	return [selectClose];
}