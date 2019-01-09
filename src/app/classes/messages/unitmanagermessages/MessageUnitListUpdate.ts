import {Unit} from '../../Unit';

export class MessageUnitListUpdate{
  constructor(units:Unit[]){
    this.unit = units;
  }

  private unit:Unit[] = [];


  get getUnit(): Unit[] {
    return this.unit;
  }
}
