import {PhasedplanTask} from './task';

export class Phasedplan {
  private _phasedPlanId: Number;
  private _name: String;
  private _tasks: PhasedplanTask[];

  static fromJSON(data: any) {
    return Object.assign(new this, data);
  }

  get phasedPlanId(): Number {
    return this._phasedPlanId;
  }

  set phasedPlanId(value: Number) {
    this._phasedPlanId = value;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get tasks(): PhasedplanTask[] {
    return this._tasks;
  }

  set tasks(value: PhasedplanTask[]) {
    this._tasks = value;
  }
}
