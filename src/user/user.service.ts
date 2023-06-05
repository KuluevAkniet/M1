import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'


@Injectable()
export class UserService {
    private tokens = {}
    constructor(private readonly jwtService:JwtService){}

    // async hashUser(){
    //     const user = await this.tokens
    // }


    async getData(data: { name: string, lastname:string, password:string } ):Promise<any>{

       const token =  await bcrypt.hash(data.name,5);

       
       const cryptUser = {
        ...data, name:token
       }

       this.tokens = cryptUser;

       if(cryptUser.name && data.name){
         console.log(true)
       }else{
        console.log(false)
       }

    }
     
}
