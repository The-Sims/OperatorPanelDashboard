export class IncidentDescription {
  private _message: string;
  private _date: Date;


  /*constructor(obj) {
    if (obj != null) {
      for (var prop in obj) this[prop] = obj[prop];
    }
  }*/

  static fromJSON(data: any) {
    return Object.assign(new this, data);
  }


  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }
}
