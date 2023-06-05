import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'


@Injectable()
export class UserService {
    constructor(private readonly jwtService:JwtService){}


    async getData(data:object ):Promise<any>{

        let  payload = {...data};

        setTimeout(() => {
            payload = null
        },5000)

        const jwt =  {
            token: this.jwtService.sign(payload)
        }

       if(jwt){
          console.log(true)
       }else{
          console.log(false)
       }
    
    }
     
}
