export class MessageTipConfirm{
  constructor(incidentId:number, tipId:number, confirm:boolean) {
    this.incidentId = incidentId;
    this.tipId = tipId;
    this.confirm = confirm;
  }

  private incidentId: number;
  private tipId: number;
  private confirm: boolean;
}
