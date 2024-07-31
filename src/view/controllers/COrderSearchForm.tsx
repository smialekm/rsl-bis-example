import { OrderSearchFormState, OrderSearch } from "../../viewmodel/ViewModel";
import { UCFindOrder } from "../../usecases/UCFindOrder";

export function COrderSearchForm(
	state: OrderSearchFormState,
	findOrder: UCFindOrder
) {
	function selectSearch() {
		let orderSearch: OrderSearch = Object.create(state.orderSearch);
		findOrder.selectSearch(orderSearch);
	}

	function selectCancel() {
		findOrder.selectCancel();
	}

	return [selectSearch, selectCancel];
}