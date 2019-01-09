import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {WebsocketService} from './websocket.service';
import 'rxjs/add/operator/map';
import {EncapsulatingMessage} from '../../classes/messages/EncapsulatingMessage';
import {MessageConnectAsOperator} from '../../classes/messages/analysermessages/MessageConnectAsOperator';


const CHAT_URL = 'ws:/145.93.112.219:8095/unitmanagerserver/websocket/';


@Injectable({
    providedIn: 'root'
})
export class UnitwebsocksService {
    public messages: Subject<EncapsulatingMessage>;
    public connectAsOperator;

    constructor(wsService: WebsocketService) {
        const $this = this;
        this.connectAsOperator = function () {
            console.log('setting callback');
            let obj = new MessageConnectAsOperator();
            $this.sendMsg(obj);
        };
        this.messages = <Subject<EncapsulatingMessage>>wsService
            .connect(CHAT_URL)
            .map((response: MessageEvent): EncapsulatingMessage => {
                console.log(response.data);
                let msg = new EncapsulatingMessage(JSON.parse(response.data));
                return msg;
            });
        setInterval(function () {
            console.log('ping');
            let obj = new MessageConnectAsOperator();
            $this.sendMsg(obj);
        }, 10000);

    }

    sendMsg(msg: object) {
        console.log('new msg from client to web');
        let message = new EncapsulatingMessage(null);
        message.setMessageType = msg.constructor.name;
        message.setMessageData = JSON.stringify(msg);
        this.messages.next(message);
    }
}
