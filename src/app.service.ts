import { Injectable } from '@nestjs/common';
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'http';

@Injectable()
@WebSocketGateway()
export class AppService {
  @WebSocketServer() server: Server;

  @SubscribeMessage('events')
  getHello(): string {
    return 'Hello World!';
  }
}
