import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { log } from 'console';
import { userInfo } from 'os';


@Injectable()
export class UserService {
    private tokens = {}
    constructor(private readonly jwtService:JwtService){}



    async getData(data: { name: string, lastname:string, password:string } ):Promise<any>{
  

      try{
        if (this.tokens[data.name]) {
          const result = this.jwtService.verify(this.tokens[data.name])
          console.log(true)
          return true;
        } else {
          const userToken = this.jwtService.sign(data);
          this.tokens[data.name] = userToken;
          return true;
       }
        
      }catch(e){
         console.log("Время истекло")
         return false;
      }
  
      }
     
}
