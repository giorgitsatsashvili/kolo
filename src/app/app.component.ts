import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test2';
  user:any;

  constructor(private userService: UserService) {
 this.user=this.userService.returnUsers();
 
  }

  addUser(form){
  const data = form.value;
  this.userService.addUser(data);  
  }

  removeUser(test){
this.userService.removeUser(test);
  }


  userSort(users){
    // console.log(this.userService.userSort(users));
return this.userService.userSort(users);

  }

 


}
