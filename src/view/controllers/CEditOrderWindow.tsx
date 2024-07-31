import { EditOrderWindowState, OrderDetails } from "../../viewmodel/ViewModel";
import { UCEditOrder } from "../../usecases/UCEditOrder";

export function CEditOrderWindow(
	state: EditOrderWindowState,
	editOrder: UCEditOrder
) {
	function selectSave() {
		let orderDetails: OrderDetails = Object.create(state.orderDetails);
		editOrder.selectSave(orderDetails);
	}

	return [selectSave];
}