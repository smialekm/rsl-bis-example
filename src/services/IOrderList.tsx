import { OrderList } from "../viewmodel/ViewModel";

export interface IOrderList {
  readOrderList(): OrderList;
  deleteOrderList(orderList: OrderList): bigint;
}

export class OrderListProxy implements IOrderList {
  orders: OrderList;
  constructor() {
    this.orders = new OrderList();
    this.orders.orders = [
      { title: "First", number: BigInt(12), dates: "2020-01-01" },
      { title: "Second", number: BigInt(13), dates: "2020-01-01" },
      { title: "Third", number: BigInt(14), dates: "2020-01-01" },
    ];
  }
  readOrderList(): OrderList {
    return this.orders;
  }
  deleteOrderList(orderList: OrderList): bigint {
    this.orders.orders = this.orders.orders.filter((o) => {
      return !orderList.orders.some((o2) => o.number == o2.number);
    });
    return BigInt(0);
  }
}
