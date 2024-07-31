import { OrderSuccessMessageState } from "../../viewmodel/ViewModel";
import { UCAddOrder } from "../../usecases/UCAddOrder";

export function COrderSuccessMessage(
	state: OrderSuccessMessageState,
	addOrder: UCAddOrder
) {
	function selectOk() {
		addOrder.selectOk();
	}

	return [selectOk];
}