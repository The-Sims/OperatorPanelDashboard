export class Unit{
  constructor(obj) {
    for (var prop in obj) this[prop] = obj[prop];
  }

  private unitId:string;
  private unitName:string;
  private unitAvailability:boolean;


  get getUnitId(): string {
    return this.unitId;
  }

  get getUnitName(): string {
    return this.unitName;
  }

  get getUnitAvailability(): boolean {
    return this.unitAvailability;
  }
}
