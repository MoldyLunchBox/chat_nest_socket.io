import { NestFactory } from '@nestjs/core';
import { env } from 'process';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { WsAdapter } from '@nestjs/platform-ws';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(app)
  // app.use((req, res, next) => {
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  //   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  //   next();
  // });


  // app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(parseInt(process.env.PORT) || 3001);
}
bootstrap();
