import { AddOrderFormState, Order } from "../../viewmodel/ViewModel";
import { UCAddOrder } from "../../usecases/UCAddOrder";

export function CAddOrderForm(
	state: AddOrderFormState,
	addOrder: UCAddOrder
) {
	function selectAdd() {
		let order: Order = Object.create(state.order);
		addOrder.selectAdd(order);
	}

	function selectCancel() {
		addOrder.selectCancel();
	}

	return [selectAdd, selectCancel];
}