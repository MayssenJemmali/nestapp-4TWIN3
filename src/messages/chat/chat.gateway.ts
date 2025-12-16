import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { MessagesService } from '../messages.service';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: Server;
  constructor(private readonly messagesService: MessagesService) {}
  @SubscribeMessage('send_message')
  async handleMessage(@MessageBody() data: any) {
    console.log(data);
    
    const message = await this.messagesService.create(data.content, 'sent');
    console.log(message);
    
    this.server.emit('receive_message', message);
    return message;
  }
}
