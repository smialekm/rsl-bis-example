import { DeleteConfirmationMessageState } from "../../viewmodel/ViewModel";
import { UCDeleteOrders } from "../../usecases/UCDeleteOrders";

export function CDeleteConfirmationMessage(
	state: DeleteConfirmationMessageState,
	deleteOrders: UCDeleteOrders
) {
	function selectDelete() {
		deleteOrders.selectDelete();
	}

	return [selectDelete];
}