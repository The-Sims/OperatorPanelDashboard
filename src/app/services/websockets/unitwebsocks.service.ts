import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {WebsocketService} from './websocket.service';
import 'rxjs/add/operator/map';
import {EncapsulatingMessage} from '../../classes/messages/EncapsulatingMessage';


const CHAT_URL = 'ws:/145.93.113.127:8095/unitmanagerserver/websocket/';


@Injectable({
  providedIn: 'root'
})
export class UnitwebsocksService {
  public messages: Subject<EncapsulatingMessage>;

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<EncapsulatingMessage>>wsService
      .connect(CHAT_URL)
      .map((response: MessageEvent): EncapsulatingMessage => {
        console.log(response.data);
        let msg = new EncapsulatingMessage(JSON.parse(response.data));
        return msg;
      });

  }
    sendMsg(msg: object) {
        console.log('new msg from client to web')
        let message = new EncapsulatingMessage(null);
        message.setMessageType = msg.constructor.name;
        message.setMessageData = JSON.stringify(msg);
        this.messages.next(message);
    }
}
