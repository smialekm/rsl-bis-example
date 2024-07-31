import { OrderSearchEnum, OrderSearch } from "../viewmodel/ViewModel";

export interface IOrderSearch {
	checkOrderSearch(orderSearch: OrderSearch): OrderSearchEnum;
}

export class OrderSearchProxy implements IOrderSearch{

	checkOrderSearch(orderSearch: OrderSearch): OrderSearchEnum {
		return OrderSearchEnum[0];
	}
}

