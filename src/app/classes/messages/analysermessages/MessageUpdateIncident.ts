import {Incident} from '../../incident';

export class MessageUpdateIncident{
  constructor(obj) {
    for (var prop in obj) this[prop] = obj[prop];
  }

  private incident:Incident;
  private concluded:boolean;


  get getIncident(): Incident {
    return this.incident;
  }

  get getConcluded(): boolean {
    return this.concluded;
  }
}
