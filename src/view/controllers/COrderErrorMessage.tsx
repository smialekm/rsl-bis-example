import { OrderErrorMessageState } from "../../viewmodel/ViewModel";
import { UCAddOrder } from "../../usecases/UCAddOrder";

export function COrderErrorMessage(
	state: OrderErrorMessageState,
	addOrder: UCAddOrder
) {
	function selectOk() {
		addOrder.selectOk1();
	}

	return [selectOk];
}