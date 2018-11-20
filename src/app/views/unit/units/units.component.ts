import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import {IncidentsService} from '../../../services/incidents.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ServiceEnum} from '../../../enums/serviceEnum';
import {Incident} from '../../../classes/incident';
import {ChatService} from '../../../services/websockets/chat.service';
import {MessageConfirmOrder} from '../../../classes/messages/MessageConfirmOrder';
import {EncapsulatingMessage} from '../../../classes/messages/EncapsulatingMessage';
import {MessageOrder} from '../../../classes/messages/MessageOrder';


@Component({
  selector: 'app-incident-list',
  templateUrl: './units.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitsComponent implements OnInit {
  public tableWidget: any;
  public httpError: HttpErrorResponse = null;
  protected incidents: Incident[];

  constructor(private chatService: ChatService) {
    chatService.messages.subscribe(msg => {
      console.log(msg.getMessageType);
      console.log(msg.getMessageData);
      this.switchComponent(msg);
      this.sendMsg(new MessageConfirmOrder('Random', 5, 'Om te testen', true));
    });
  }

  switchComponent(msg) {
    switch (msg.getMessageType) {
      case 'public class communication.messages.unitmessages.MessageOrder':
        console.log('Me gotst an order');
        let message = new MessageOrder(JSON.parse(msg.getMessageData));
        console.log(message.getIncidentTitle + ', ' + message.getLocation + ', ' + message.getOperatorId + ', ' + message.getOrderId);
        break;
      default:
        console.log('rip');
        break;
    }
  }

  sendMsg(msg: object) {
    console.log('new msg from client to web');
    let message = new EncapsulatingMessage(null);
    message.setMessageType = msg.constructor.name;
    message.setMessageData = JSON.stringify(msg);
    this.chatService.messages.next(message);
  }

  ngOnInit() {

  }

}
