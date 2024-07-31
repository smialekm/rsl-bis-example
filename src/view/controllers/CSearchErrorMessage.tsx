import { SearchErrorMessageState } from "../../viewmodel/ViewModel";
import { UCFindOrder } from "../../usecases/UCFindOrder";

export function CSearchErrorMessage(
	state: SearchErrorMessageState,
	findOrder: UCFindOrder
) {
	function selectClose() {
		findOrder.selectClose1();
	}

	function selectRepeat() {
		findOrder.selectRepeat();
	}

	return [selectClose, selectRepeat];
}