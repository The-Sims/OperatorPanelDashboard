import {IncidentDescription} from './incidentDescription';
import {IncidentCategory} from './incidentCategory';
import {IncidentTip} from './incidentTip';

export class Incident {
  private _id: number;
  private _category: IncidentCategory;
  private _place: string;
  private _reinforcementInfo: IncidentDescription[];
  private _incidentDescription: IncidentDescription[];
  private _tips: IncidentTip[];
  private _live: boolean;
  private _createDate: Date;
  private _modifyDate: Date;


  /*constructor(obj) {
    if (obj != null) {
      for (var prop in obj) this[prop] = obj[prop];
    }
  }*/

  static fromJSON(data: any) {
    return Object.assign(new this, data);
  }

  get tips(): IncidentTip[] {
    return this._tips;
  }

  set tips(value: IncidentTip[]) {
    this._tips = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get category(): IncidentCategory {
    return this._category;
  }

  set category(value: IncidentCategory) {
    this._category = value;
  }

  get place(): string {
    return this._place;
  }

  set place(value: string) {
    this._place = value;
  }


  get reinforcementInfo(): IncidentDescription[] {
    return this._reinforcementInfo;
  }

  set reinforcementInfo(value: IncidentDescription[]) {
    this._reinforcementInfo = value;
  }

  get incidentDescription(): IncidentDescription[] {
    return this._incidentDescription;
  }

  set incidentDescription(value: IncidentDescription[]) {
    this._incidentDescription = value;
  }

  get live(): boolean {
    return this._live;
  }

  set live(value: boolean) {
    this._live = value;
  }


    get createDate(): Date {
        return this._createDate;
    }

    set createDate(value: Date) {
        this._createDate = value;
    }


    get modifyDate(): Date {
        return this._modifyDate;
    }

    set modifyDate(value: Date) {
        this._modifyDate = value;
    }
}
