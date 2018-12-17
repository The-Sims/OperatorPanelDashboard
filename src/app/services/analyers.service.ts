import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {WebsocketService} from './websocket-Analyser.service';
import {EncapsulatingMessage} from '../classes/encapsulatingMessage';


const CHAT_URL = 'ws:/145.93.113.133:8090/analyserserver/websocket/';

@Injectable()
export class AnalyersService {
    public messages: Subject<EncapsulatingMessage>;

    constructor(private ws: WebsocketService) {

        console.log('new tip service');
        this.tips = new Subject<EncapsulatingMessage>();
        this.tips = <Subject<EncapsulatingMessage>>this.ws
            .connect(CHAT_URL)
            .map((response: MessageEvent): EncapsulatingMessage => {
                console.log(response.data);
                console.log('help');
                let msg = new EncapsulatingMessage(JSON.parse(response.data));
                return msg;
            });
    }


    sendMsg(msg: object) {
        console.log('new msg from client to web');
        let message = new EncapsulatingMessage(null);
        message.setMessageType = msg.constructor.name;
        message.setMessageData = JSON.stringify(msg);
        this.tips.next(message);
    }
}
