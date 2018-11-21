export class Incident {
  private _id: number;
  private _category: string;
  private _place: string;
  private _reinforcementInfo: string[];
  private _incidentDescription: string[];
  private _live: boolean;
  private _create_date: Date;
  private _modify_date: string;


  /*constructor(obj) {
    if (obj != null) {
      for (var prop in obj) this[prop] = obj[prop];
    }
  }*/

  static fromJSON(data: any) {
    return Object.assign(new this, data);
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }

  get place(): string {
    return this._place;
  }

  set place(value: string) {
    this._place = value;
  }

  get reinforcementInfo(): string[] {
    return this._reinforcementInfo;
  }

  set reinforcementInfo(value: string[]) {
    this._reinforcementInfo = value;
  }

  get incidentDescription(): string[] {
    return this._incidentDescription;
  }

  set incidentDescription(value: string[]) {
    this._incidentDescription = value;
  }

  get live(): boolean {
    return this._live;
  }

  set live(value: boolean) {
    this._live = value;
  }


  get create_date(): Date {
    return this._create_date;
  }

  set create_date(value: Date) {
    this._create_date = value;
  }

  get modify_date(): string {
    return this._modify_date;
  }

  set modify_date(value: string) {
    this._modify_date = value;
  }
}
