import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:5500/socket.html',
    methods: ['GET', 'POST'],
  },
})
export class EventsGateway {
  @SubscribeMessage('exampleEvent')
  handleEvents(socket: Socket, data: any) {
    // Process and log event data
    console.log('Received event:', data);
    // Optionally send a response to the client
    socket.emit('eventResponse', { message: 'Event received' });
  }
}
