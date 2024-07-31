import { Dispatch } from "react";
import { PresentationDispatcher } from "./PresentationDispatcher";
import {
  OrderListWindowState,
  ScreenId,
  OrderList,
  Order,
} from "../../viewmodel/ViewModel";

export function updateOrderListWindow(
  state: OrderListWindowState,
  action: string
) {
  let newState = { ...state };
  return newState;
}

export class POrderListWindow extends PresentationDispatcher {
  state!: OrderListWindowState;
  updateView!: Dispatch<string>;

  injectStateHandle(state: OrderListWindowState, updateView: Dispatch<string>) {
    this.state = state;
    this.updateView = updateView;
  }

  showOrderListWindow(orderList: OrderList) {
    this.state.baseOrderList = orderList;
    this.state.orderList = new OrderList();
    this.state.orderList.name = orderList.name;
    this.state.order = undefined;
    this.gUpdateView?.(ScreenId.ORDERLISTWINDOW);
  }
}
