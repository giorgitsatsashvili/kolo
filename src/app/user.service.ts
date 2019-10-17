import { Injectable } from '@angular/core';
import { filter } from 'minimatch';

interface IUsers {
  id:number,
  name:string,
  lastname:string,
  personal_id:number,
  phone:number,
  email:string,
  address:string
}


let users:IUsers[]=[
  {
    id:1,
    name:'lasha',
    lastname:'tsatsashvili',
    personal_id:123456789,
    phone:593159109,
    email:'lashatsatsashvili@gmail.com',
    address:'bakhtioni 35'
  },
  {
    id:2,
    name:'giorgi',
    lastname:'tsatsashvili',
    personal_id:1024036418,
    phone:595806443,
    email:'giotsatsashvili@gmail.com',
    address:'bakhtioni 35'
  }
];

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  returnUsers():IUsers[]{
return users;
  }

  addUser(user:IUsers){
    user.id=users.length+1;
    users.push(user);
    console.log(users);
  }

removeUser(ind:number):void{
users.splice(ind,1);
}  

userSort(users){
 return users.sort((a,b) => (a.personal_id > b.personal_id) ? 1 : -1)
}


}
