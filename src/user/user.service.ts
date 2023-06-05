import { Injectable } from '@nestjs/common';


@Injectable()
export class UserService {
    constructor(){}
    
    async getToken(data:string){
        const token = Object.values(data)
        const check = token[0]
         if(check){
             console.log(true)
         }else{
             console.log('token is not found')
         }
    }
     
}
