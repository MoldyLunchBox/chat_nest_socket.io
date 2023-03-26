import { WebSocketGateway, MessageBody, SubscribeMessage, WebSocketServer } from "@nestjs/websockets";

@WebSocketGateway(8001, {cors: '*'})
export class ChatGateway{
    @WebSocketServer()
    server;

    @SubscribeMessage('message')
    handleMessage(@MessageBody() data: { nickName: string, value: string}) : void {
        const { nickName, value } = data;
        console.log(data)
        this.server.emit('message', `${nickName}: ${value}`);
    }
}