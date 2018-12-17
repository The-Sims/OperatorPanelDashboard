import {Unit} from '../../Unit';

export class MessageConfirmOrder{
  constructor(obj) {
    for (var prop in obj) this[prop] = obj[prop];
  }

  private orderId:number;
  private reason:string;
  private accepted:boolean;
  private unit:Unit;


  get getOrderId(): number {
    return this.orderId;
  }

  get getReason(): string {
    return this.reason;
  }

  get isAccepted(): boolean {
    return this.accepted;
  }

  get getUnit(): Unit {
    return this.unit;
  }
}
