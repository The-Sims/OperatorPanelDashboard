export class Incident {
  private _id: number;
  private _category: string;
  private _place: string;
  private _reinforcementInfo: string[];
  private _live: boolean;
  private _date_created: string;
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

  get live(): boolean {
    return this._live;
  }

  get date_created(): string {
    return this._date_created;
  }

  get date_updated(): string {
    return this._modify_date;
  }


  set id(value: number) {
    this._id = value;
  }

  set live(value: boolean) {
    this._live = value;
  }

  set date_created(value: string) {
    this._date_created = value;
  }

  set modify_date(value: string) {
    this._modify_date = value;
  }
}
