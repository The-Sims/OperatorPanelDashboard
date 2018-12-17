import {Incident} from '../../incident';

export class MessageUpdateIncidents{
  constructor(obj) {
    for (var prop in obj) this[prop] = obj[prop];
  }

  private incidents:Incident[] = [];
  private confirmedIncidents: Incident[] = [];


  get getIncidents(): Incident[] {
    return this.incidents;
  }

  get getConfirmedIncidents(): Incident[] {
    return this.confirmedIncidents;
  }
}
