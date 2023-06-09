import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat.gateway';
import { HttpAdapterHost } from '@nestjs/core';

@Module({
  imports: [],
  controllers: [AppController],
  // add ChatGateway to providers
  providers: [AppService, ChatGateway ],
})
export class AppModule {}
