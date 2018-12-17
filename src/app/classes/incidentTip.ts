export class IncidentTip {
  private _confirmed: boolean;
  private _id: number;
  private _location: string;
  private _message: string;
  private _origin: string;
  private _sender: string;

  static fromJSON(data: any) {
    return Object.assign(new this, data);
  }

  get confirmed(): boolean {
    return this._confirmed;
  }

  set confirmed(value: boolean) {
    this._confirmed = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get origin(): string {
    return this._origin;
  }

  set origin(value: string) {
    this._origin = value;
  }

  get sender(): string {
    return this._sender;
  }

  set sender(value: string) {
    this._sender = value;
  }
}
