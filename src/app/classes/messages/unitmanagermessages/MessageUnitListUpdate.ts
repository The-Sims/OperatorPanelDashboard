import {Unit} from '../../Unit';

export class MessageUnitListUpdate{
  constructor(unitIds:Unit[]){
    this.unitIds = unitIds;
  }

  private unitIds:Unit[] = [];


  get getUnitIds(): Unit[] {
    return this.unitIds;
  }
}
