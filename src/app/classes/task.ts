export class PhasedplanTask {
  private _taskId: Number;
  private _name: String;
  private _description: String;

  static fromJSON(data: any) {
    return Object.assign(new this, data);
  }


  get taskId(): Number {
    return this._taskId;
  }

  set taskId(value: Number) {
    this._taskId = value;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get description(): String {
    return this._description;
  }

  set description(value: String) {
    this._description = value;
  }
}
