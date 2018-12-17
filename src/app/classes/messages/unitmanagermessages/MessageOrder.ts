import {Unit} from '../../Unit';

export class MessageOrder{
  private units:Unit[] = [];
  private orderId:number;
  private incidentTitle:string;
  private location:string;

  constructor(units:Unit[], orderId:number, incidentTitle:string, location:string){
    this.units = units;
    this.orderId = orderId;
    this.incidentTitle = incidentTitle;
    this.location = location;
  }
}
