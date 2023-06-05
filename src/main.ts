import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,{
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://kitlyuux:LgtxkjvPqPzT7lvKyC3z62h_wqlui_xI@shark.rmq.cloudamqp.com/kitlyuux'],
      queue: 'cats_queue',
      queueOptions: {
        durable: false
      },
    },
  });
  await app.listen();
}
bootstrap();
