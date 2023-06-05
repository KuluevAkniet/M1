import { Controller, Get, } from '@nestjs/common';
import { ClientProxy, MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { Client } from '@nestjs/microservices/external/nats-client.interface';



@Controller('user')
export class UserController {
     constructor (private readonly userService:UserService){}


    @MessagePattern({cmd:'token'})
    async getToken(@Payload()  data:any ):Promise<any>{
       return await this.userService.getToken(data)
    }
    
}
