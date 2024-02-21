import { Inject, Injectable } from '@nestjs/common';
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'http';

@Injectable()
// @WebSocketGateway()
export class AppService {
  constructor(@Inject('CONNECTION') private conn: any) {}
  // @WebSocketServer() server: Server;

  // @SubscribeMessage('events')
  async getHello(): Promise<any> {
    const res = await this.conn.query('SELECT * FROM cardid');
    return res.rows;
  }
}
