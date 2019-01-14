import {Unit} from '../../Unit';

export class MessageUnitListUpdate{
  constructor(units:Unit[]){
    this.unit = units;
  }

  private unit:Unit[] = [];


  get getUnits(): Unit[] {
    return this.unit;
  }
}
