import { Controller, Get, Post, } from '@nestjs/common';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { Client } from '@nestjs/microservices/external/nats-client.interface';



@Controller('user')
export class UserController {
     constructor (private readonly userService:UserService){}


    @MessagePattern({cmd:'token'})
    async getData(@Payload()  data:{name: string, lastname:string, password:string} ):Promise<any>{
       return await this.userService.getData(data)
    }


    @Post('answer')
    async answer(){
       return await "Время истекло"
    }
     
}
