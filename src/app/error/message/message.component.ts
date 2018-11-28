import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-message',
    templateUrl: 'message.component.html',
    styleUrls: ['./message.component.css']
})

export class MessageComponent {
    lastMessage: Message;

    constructor(
        messageService: MessageService
    ) {
        messageService.messages.subscribe(m => this.lastMessage = m);
    }
}