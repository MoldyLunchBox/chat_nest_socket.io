import { WebSocketGateway, MessageBody, SubscribeMessage, WebSocketServer } from "@nestjs/websockets";

@WebSocketGateway()
export class ChatGateway{
    @WebSocketServer()
    server;

    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: string) : void {
        this.server.emit()
    }
}