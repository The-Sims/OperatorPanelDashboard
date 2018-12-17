export class IncidentCategory {
  private _id: number;
  private _category: string;

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
}
