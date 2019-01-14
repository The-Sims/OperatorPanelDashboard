import {Injectable, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {WebsocketService} from './websocket.service';
import 'rxjs/add/operator/map';
import {EncapsulatingMessage} from '../../classes/messages/EncapsulatingMessage';
import {MessageConnectAsOperator} from '../../classes/messages/analysermessages/MessageConnectAsOperator';


const CHAT_URL = 'ws:/145.93.112.100:8090/analyserserver/websocket/';


@Injectable({
    providedIn: 'root'
})
export class AnalyserwebsocksService {
    public messages: Subject<EncapsulatingMessage>;

    public connectAsOperator;

    constructor(private wsService: WebsocketService) {
        const $this = this;
        this.connectAsOperator = function () {
            console.log('setting callback');
            let obj = new MessageConnectAsOperator();
            $this.sendMsg(obj);
        };

        this.messages = <Subject<EncapsulatingMessage>>wsService
            .connect(CHAT_URL)
            .map((response: MessageEvent): EncapsulatingMessage => {
                let msg = new EncapsulatingMessage(JSON.parse(response.data));

                return msg;
            });

        setInterval(function () {
            console.log('ping');
            let obj = new MessageConnectAsOperator();
            $this.sendMsg(obj);
        }, 10000);

    }

    //


    sendMsg(msg: object) {
        let message = new EncapsulatingMessage(null);
        message.setMessageType = msg.constructor.name;
        message.setMessageData = JSON.stringify(msg);
        this.messages.next(message);
    }
}
