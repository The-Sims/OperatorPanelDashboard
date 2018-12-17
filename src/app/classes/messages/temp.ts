import {MessageConfirmOrder} from './unitmanagermessages/MessageConfirmOrder';
import {MessageUnitListUpdate} from './unitmanagermessages/MessageUnitListUpdate';
import {MessageUpdateIncident} from './analysermessages/MessageUpdateIncident';
import {MessageUpdateIncidents} from './analysermessages/MessageUpdateIncidents';

export class temp{
  //in constructor
  /*
  constructor(private tip:TipService, private chat: ChatService, private router: Router, private data: DataService) {
        this.chat.messages.subscribe(msg => {
            console.log(msg.getMessageType)
            console.log(msg.getMessageData)
            this.switchComponent(msg);
        });
  */

  //unitmanagerserver switch component
  switchComponent(msg) {
    let message = null;
    switch (msg.getMessageType) {
      case "public class communication.messages.operatormessages.MessageConfirmOrderOperator":
        console.log("Me gotst a confirm order");
        message = new MessageConfirmOrder(JSON.parse(msg.getMessageData));
        //todo do whatever you need to do with the data
        break;
      case "public class communication.messages.operatormessages.MessageUnitListUpdate":
        console.log("Me gotst a unit list update");
        message = new MessageUnitListUpdate(JSON.parse(msg.getMessageData));
        //todo do whatever you need to do with the data
        break;
      default:
        console.log("rip");
        break;
    }
  }

  //analyserserver switch component
  switchComponent2(msg) {
    let message = null;
    switch (msg.getMessageType) {
      case "public class communication.messages.unitmessages.MessageUpdateIncident":
        console.log("Me gotst an update incident");
        message = new MessageUpdateIncident(JSON.parse(msg.getMessageData));
        //todo do whatever you need to do with the data
        break;
      case "public class communication.messages.unitmessages.MessageUpdateIncidents":
        console.log("Me gotst an update incidents");
        message = new MessageUpdateIncidents(JSON.parse(msg.getMessageData));
        //todo do whatever you need to do with the data
        break;
      default:
        console.log("rip");
        break;
    }
  }
}
