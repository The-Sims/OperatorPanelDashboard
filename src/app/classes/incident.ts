export class Incident {
  private _id: number;
  private _category: string;
  private _place: string;
  private _reinforcementInfo: string[];
  private _live: boolean;
  private _date_created: string;
  private _date_updated: string;


  constructor(id: number, category: string, place: string, reinforcementInfo: string[], live: boolean, date_created: string, date_updated: string) {
    this._id = id;
    this._category = category;
    this._place = place;
    this._reinforcementInfo = reinforcementInfo;
    this._live = live;
    this._date_created = date_created;
    this._date_updated = date_updated;
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
    return this._date_updated;
  }
}
