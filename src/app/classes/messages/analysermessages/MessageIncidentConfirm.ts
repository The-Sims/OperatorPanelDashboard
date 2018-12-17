export class MessageIncidentConfirm{
  constructor(obj) {
    for (var prop in obj) this[prop] = obj[prop];
  }

  private incidentId:number;
  private confirmed:boolean;

  get getIncidentId(): number {
    return this.incidentId;
  }

  get getConfirmed(): boolean {
    return this.confirmed;
  }
}
